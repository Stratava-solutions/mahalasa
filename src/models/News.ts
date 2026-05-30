import mongoose, { Schema, Document } from "mongoose";

export interface INews extends Document {
  title: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
}

const NewsSchema = new Schema<INews>(
  {
    title: { type: String, required: true },
    content: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    publishedAt: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.News ||
  mongoose.model<INews>("News", NewsSchema);
