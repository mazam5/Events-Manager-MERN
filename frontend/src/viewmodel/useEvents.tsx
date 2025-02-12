import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../CONSTANTS";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

const useEvents = () => {
  const socket = io(API_URL);
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchAllEvents();
    if (socket) {
      console.log("Socket connected");
    }
  }, []);
  const fetchAllEvents = async () => {
    try {
      const response = await axios.get(API_URL + "/events");
      setEvents(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const goTo = (path: string) => {
    navigate(path);
  };
  const attendEvent = async (eventId: number) => {
    try {
      const response = await axios.post(API_URL + `/events/${eventId}/attend`, {
        eventId,
      });
      if (response.status === 200) {
        fetchAllEvents();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { events, navigate, goTo, attendEvent };
};

export default useEvents;
