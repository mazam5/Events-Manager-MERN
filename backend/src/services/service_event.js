import { Event } from "../models/model_event.js";

export const createEvent = async ({ title, description, date, userId }) => {
  return await Event.create({ title, description, date, createdBy: userId });
};

export const getAllEvents = async () => {
  return await Event.find()
    .populate("createdBy", "username")
    .populate("attendees", "username");
};

export const getEventById = async (eventId) => {
  return await Event.findById(eventId)
    .populate("createdBy", "username")
    .populate("attendees", "username");
};

export const updateEvent = async (eventId, updates, userId) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");
  if (event.createdBy.toString() !== userId) throw new Error("Unauthorized");

  Object.assign(event, updates);
  return await event.save();
};

export const deleteEvent = async (eventId, userId) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");
  if (event.createdBy.toString() !== userId) throw new Error("Unauthorized");

  await event.deleteOne();
  return { message: "Event deleted successfully" };
};

export const attendEvent = async (eventId, userId) => {
  const event = await Event.findById(eventId);
  if (!event) throw new Error("Event not found");

  if (!event.attendees.includes(userId)) {
    event.attendees.push(userId);
    await event.save();
  }

  return event;
};
