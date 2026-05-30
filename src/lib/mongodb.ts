import mongoose from "mongoose";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global._mongoose ?? { conn: null, promise: null };
global._mongoose = cached;

function fixMongoUri(uri: string): string {
  // Percent-encode '@' inside the password so the driver's URL parser
  // always splits on the LAST '@' (the real host separator).
  const schemeEnd = uri.indexOf("://") + 3;
  const afterScheme = uri.slice(schemeEnd);
  // find the last '@' before the host — everything before it is userinfo
  const lastAt = afterScheme.lastIndexOf("@");
  if (lastAt === -1) return uri; // no credentials
  const userinfo = afterScheme.slice(0, lastAt);
  const rest = afterScheme.slice(lastAt + 1);
  const colonIdx = userinfo.indexOf(":");
  if (colonIdx === -1) return uri; // no password
  const user = userinfo.slice(0, colonIdx);
  const password = userinfo.slice(colonIdx + 1).replace(/@/g, "%40");
  return `${uri.slice(0, schemeEnd)}${user}:${password}@${rest}`;
}

export async function connectDB() {
  const raw = process.env.MONGODB_URI;
  if (!raw) throw new Error("Please define MONGODB_URI in .env.local");
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    const uri = fixMongoUri(raw);
    cached.promise = mongoose
      .connect(uri, { dbName: process.env.MONGODB_DB || "mahalasa_admin" })
      .then((m) => m)
      .catch((e) => {
        cached.promise = null;
        throw e;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}


