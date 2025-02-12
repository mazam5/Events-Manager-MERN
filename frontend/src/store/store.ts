import { configureStore } from "@reduxjs/toolkit";
import { eventsSlice } from "./reducers/eventsSlice";

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
