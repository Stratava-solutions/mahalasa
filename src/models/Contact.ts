import mongoose, { Schema, Document } from "mongoose";

export type ContactStatus = "new" | "read" | "replied" | "resolved" | "spam";

export interface IContact extends Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: ContactStatus;
  adminNotes: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, default: "" },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "read", "replied", "resolved", "spam"],
      default: "new",
    },
    adminNotes: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);
