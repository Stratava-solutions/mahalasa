import mongoose, { Schema, Document } from "mongoose";

export interface IPanchangamEvent extends Document {
  day: number;
  month: number;
  year: number;
  title: string;
  description: string;
  imageUrl: string;
  eventType: "festival" | "pooja" | "satsang" | "other";
  isActive: boolean;
  createdAt: Date;
}

const PanchangamEventSchema = new Schema<IPanchangamEvent>(
  {
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    eventType: {
      type: String,
      enum: ["festival", "pooja", "satsang", "other"],
      default: "other",
    },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.PanchangamEvent ||
  mongoose.model<IPanchangamEvent>("PanchangamEvent", PanchangamEventSchema);
