import { Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    mode: { type: String },
    duration: { type: String },
    speakers: [
      {
        type: String,
      },
    ],
    categories: [
      {
        type: String,
      },
    ],
    agendas: [
      {
        type: String,
      },
    ],
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export const Event = model("Event", eventSchema);
