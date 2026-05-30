import mongoose, { Schema, Document } from "mongoose";

export interface IGalleryImage extends Document {
  title: string;
  imageUrl: string;
  category: "temple" | "deity" | "festivals" | "other";
  alt: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
}

const GalleryImageSchema = new Schema<IGalleryImage>(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: {
      type: String,
      enum: ["temple", "deity", "festivals", "other"],
      default: "other",
    },
    alt: { type: String, required: true },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.GalleryImage ||
  mongoose.model<IGalleryImage>("GalleryImage", GalleryImageSchema);
