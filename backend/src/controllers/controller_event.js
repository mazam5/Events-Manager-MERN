import { Event } from "../models/model_event.js";
import {
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  attendEvent,
} from "../services/service_event.js";

export const createEvent = async (req, res) => {
  try {
    const event = await Event.create({
      ...req.body,
      createdBy: req.body.createdBy,
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEvents = async (req, res) => {
  const events = await Event.find().populate("createdBy", "username");
  res.json(events);
};

export const createEventHandler = async (req, res) => {
  try {
    const event = await createEvent(req, res);
    res.status(201).json(event);
  } catch (error) {
    console.error("Error in createEventHandler:", error);
    res.status(400).json({ error: error.message });
  }
};

export const getEventsHandler = async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getEventHandler = async (req, res) => {
  try {
    const event = await getEventById(req.params.eventId);
    if (!event) return res.status(404).json({ error: "Event not found" });
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateEventHandler = async (req, res) => {
  try {
    const event = await updateEvent(req.params.eventId, req.body, req.user.id);
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteEventHandler = async (req, res) => {
  try {
    const result = await deleteEvent(req.params.eventId, req.user.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const attendEventHandler = async (req, res) => {
  try {
    const event = await attendEvent(req.params.eventId, req.user.id);
    res.json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
