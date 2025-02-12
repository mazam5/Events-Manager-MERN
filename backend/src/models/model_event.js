import mongoose, { Schema, model } from "mongoose";
import mongooseSequence from "mongoose-sequence";

const AutoIncrement = mongooseSequence(mongoose);

const eventSchema = new Schema(
  {
    eventId: { type: Number, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    location: { type: String, required: true },
    mode: { type: String },
    duration: { type: String },
    speakers: [{ type: String }],
    categories: [{ type: String }],
    agendas: [{ type: String }],
    attendees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

eventSchema.plugin(AutoIncrement, { inc_field: "eventId" });

export const Event = model("Event", eventSchema);
