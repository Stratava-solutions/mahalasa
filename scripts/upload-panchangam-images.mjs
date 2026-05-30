import { readFileSync } from "fs";
import { resolve } from "path";
import mongoose from "mongoose";

// Load credentials from .env.local
const envPath = resolve(process.cwd(), ".env.local");
const envContent = readFileSync(envPath, "utf-8");

function getEnvVar(name) {
  return envContent
    .split("\n")
    .find((l) => l.startsWith(`${name}=`))
    ?.split("=")
    .slice(1)
    .join("=")
    .trim();
}

const MONGODB_URI = getEnvVar("MONGODB_URI");
const IMGBB_API_KEY = getEnvVar("IMGBB_API_KEY");

if (!MONGODB_URI) { console.error("❌ MONGODB_URI not found in .env.local"); process.exit(1); }
if (!IMGBB_API_KEY) { console.error("❌ IMGBB_API_KEY not found in .env.local"); process.exit(1); }

function fixMongoUri(uri) {
  const schemeEnd = uri.indexOf("://") + 3;
  const afterScheme = uri.slice(schemeEnd);
  const lastAt = afterScheme.lastIndexOf("@");
  if (lastAt === -1) return uri;
  const userinfo = afterScheme.slice(0, lastAt);
  const rest = afterScheme.slice(lastAt + 1);
  const colonIdx = userinfo.indexOf(":");
  if (colonIdx === -1) return uri;
  const user = userinfo.slice(0, colonIdx);
  const password = userinfo.slice(colonIdx + 1).replace(/@/g, "%40");
  return `${uri.slice(0, schemeEnd)}${user}:${password}@${rest}`;
}

const pageContentSchema = new mongoose.Schema({
  page: String, key: String,
  title: { type: String, default: "" },
  body: { type: String, default: "" },
  imageUrl: { type: String, default: "" },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const PageContent = mongoose.models.PageContent || mongoose.model("PageContent", pageContentSchema);

async function uploadToImgbb(filePath, title) {
  const base64 = readFileSync(filePath).toString("base64");
  const params = new URLSearchParams();
  params.append("image", base64);
  params.append("name", title);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: "POST",
    body: params,
  });

  const data = await res.json();
  if (!data.success) throw new Error(`imgbb upload failed: ${JSON.stringify(data.error)}`);
  return data.data.url;
}

async function run() {
  console.log("Connecting to MongoDB…");
  await mongoose.connect(fixMongoUri(MONGODB_URI), { dbName: "mahalasa_admin" });
  console.log("Connected.\n");

  const existing = await PageContent.countDocuments({ page: "panchangam" });
  if (existing > 0) {
    console.log(`⏭  Panchangam images already exist (${existing} records). Skipping.`);
    console.log("   Delete them from the admin panel first if you want to re-upload.");
    await mongoose.disconnect();
    return;
  }

  const images = [
    { file: resolve(process.cwd(), "public/program1.jpg"), title: "Programme 1", key: "programme-image-1", order: 0 },
    { file: resolve(process.cwd(), "public/program2.jpg"), title: "Programme 2", key: "programme-image-2", order: 1 },
  ];

  for (const img of images) {
    console.log(`Uploading ${img.title}…`);
    try {
      const url = await uploadToImgbb(img.file, img.title);
      await PageContent.create({
        page: "panchangam",
        key: img.key,
        title: img.title,
        imageUrl: url,
        order: img.order,
        isActive: true,
      });
      console.log(`✅ ${img.title} uploaded and saved`);
    } catch (err) {
      console.error(`❌ Failed to upload ${img.title}:`, err.message);
    }
  }

  console.log("\nDone.");
  await mongoose.disconnect();
}

run().catch((err) => {
  console.error("Script failed:", err.message);
  process.exit(1);
});
