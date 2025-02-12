import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { API_URL, bearerToken } from "../CONSTANTS";
import EventForm from "../model/add_event";

const useAddEvent = () => {
  const [speaker, setSpeaker] = useState("");
  const [decodeToken, setDecodeToken] = useState({ id: "" });
  const [agenda, setAgenda] = useState("");
  const [category, setCategory] = useState("");
  const [eventFormData, setEventFormData] = useState<EventForm>({
    title: "Event Title",
    location: "Hyderabad, India",
    date: new Date().toISOString().split("T")[0],
    duration: "",
    mode: "",
    speakers: [],
    description: "Event Description",
    categories: [],
    agendas: [],
  });

  useEffect(() => {
    if (bearerToken) {
      setDecodeToken(jwtDecode(bearerToken));
    }
  }, []);

  const onEventInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => setEventFormData({ ...eventFormData, [e.target.name]: e.target.value });

  const addToEvents = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        API_URL + "/events",
        {
          ...eventFormData,
          createdBy: decodeToken.id,
        },
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
        },
      );
      console.log(response.data);
      console.log("✅ Event Added Successfully");
    } catch (error) {
      console.error(error);
    }
  };
  return {
    eventFormData,
    speaker,
    agenda,
    category,
    onEventInputChange,
    addToEvents,
    //   setters
    setEventFormData,
    setSpeaker,
    setAgenda,
    setCategory,
  };
};

export default useAddEvent;
