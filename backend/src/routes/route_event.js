import express from "express";
import {
  createEventHandler,
  getEventsHandler,
  getEventHandler,
  updateEventHandler,
  deleteEventHandler,
  attendEventHandler,
} from "../controllers/controller_event.js";
import { authenticate } from "../middleware/middleware_auth.js";

const router = express.Router();

router.post("/", authenticate, createEventHandler);
router.get("/", getEventsHandler);
router.get("/:eventId", getEventHandler);
router.put("/:eventId", authenticate, updateEventHandler);
router.delete("/:eventId", authenticate, deleteEventHandler);
// router.post("/:eventId/attend", authenticate, attendEventHandler);
router.post("/:eventId/attend", attendEventHandler);

export default router;
