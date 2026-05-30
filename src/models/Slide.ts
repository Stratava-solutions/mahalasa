import mongoose, { Schema, Document } from "mongoose";

export interface ISlide extends Document {
  date: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  time: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
}

const SlideSchema = new Schema<ISlide>(
  {
    date: { type: String, required: true },
    badge: { type: String, required: true },
    badgeColor: { type: String, default: "bg-green-500" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    time: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Slide ||
  mongoose.model<ISlide>("Slide", SlideSchema);
