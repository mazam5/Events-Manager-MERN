import { createSlice } from "@reduxjs/toolkit";

interface Event {
  id: number;
  createdBy: string;
  title: string;
  location: string;
  dateTime: string;
  duration: string;
  mode: string;
  speakers: string[];
  shortDescription: string;
  longDescription: string;
  categories: string[];
}

const initialState = {
  events: [] as Event[],
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    getAllEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload,
      );
    },
    editEvent: (state, action) => {
      const index = state.events.findIndex(
        (event) => event.id === action.payload.id,
      );
      state.events[index] = action.payload;
    },
  },
});
