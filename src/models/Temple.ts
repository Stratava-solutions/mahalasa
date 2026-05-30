import mongoose, { Schema, Document } from "mongoose";

export interface ITemple extends Document {
  name: string;
  location: string;
  established: string;
  significance: string;
  features: string[];
  category: "india" | "international";
  imageUrl: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
}

const TempleSchema = new Schema<ITemple>(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    established: { type: String, default: "" },
    significance: { type: String, default: "" },
    features: [{ type: String }],
    category: { type: String, enum: ["india", "international"], default: "india" },
    imageUrl: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Temple ||
  mongoose.model<ITemple>("Temple", TempleSchema);
