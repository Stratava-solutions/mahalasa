import mongoose, { Schema, Document } from "mongoose";

export interface IVideo extends Document {
  title: string;
  youtubeId: string;
  description: string;
  category: "mahalasa" | "event" | "discourse" | "other";
  order: number;
  isActive: boolean;
  createdAt: Date;
}

const VideoSchema = new Schema<IVideo>(
  {
    title: { type: String, required: true },
    youtubeId: { type: String, required: true },
    description: { type: String, default: "" },
    category: {
      type: String,
      enum: ["mahalasa", "event", "discourse", "other"],
      default: "mahalasa",
    },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Video ||
  mongoose.model<IVideo>("Video", VideoSchema);
