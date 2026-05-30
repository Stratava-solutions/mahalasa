import mongoose, { Schema, Document } from "mongoose";

export interface IHeroImage extends Document {
  title: string;
  imageUrl: string;
  page: string;
  alt: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
}

const HeroImageSchema = new Schema<IHeroImage>(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    page: { type: String, required: true },
    alt: { type: String, default: "" },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.HeroImage ||
  mongoose.model<IHeroImage>("HeroImage", HeroImageSchema);
