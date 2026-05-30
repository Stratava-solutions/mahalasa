import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  isActive: boolean;
  isFeatured: boolean;
  createdAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, default: "" },
    location: { type: String, default: "" },
    description: { type: String, default: "" },
    highlights: [{ type: String }],
    imageUrl: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Event ||
  mongoose.model<IEvent>("Event", EventSchema);
