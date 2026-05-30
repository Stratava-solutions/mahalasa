import mongoose, { Schema, Document } from "mongoose";

export interface IPageContent extends Document {
  page: string;
  key: string;
  title: string;
  subtitle: string;
  body: string;
  imageUrl: string;
  imageAlt: string;
  order: number;
  isActive: boolean;
}

const PageContentSchema = new Schema<IPageContent>(
  {
    page: { type: String, required: true, index: true },
    key: { type: String, required: true },
    title: { type: String, default: "" },
    subtitle: { type: String, default: "" },
    body: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.PageContent ||
  mongoose.model<IPageContent>("PageContent", PageContentSchema);
