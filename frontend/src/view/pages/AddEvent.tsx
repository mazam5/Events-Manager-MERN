import axios from "axios";
import {
  CalendarPlus,
  ChartBarStacked,
  FolderPen,
  LucideCalendarCheck,
  MapPinned,
  NotebookPen,
  Speech,
  Text,
  Timer,
} from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import EventForm from "../../model/add_event";
import AdditionalInput from "../components/AdditionalInput";
import InputElement from "../components/InputElement";
import InputSelect from "../components/InputSelect";
import { jwtDecode } from "jwt-decode";

const AddEvent = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const bearerToken = localStorage.getItem("token");
  const [decodedToken, setDecodedToken] = useState({ id: "" });

  useEffect(() => {
    if (bearerToken) {
      setDecodedToken(jwtDecode(bearerToken));
    }
  }, []);
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
  const [speaker, setSpeaker] = useState("");
  const [agenda, setAgenda] = useState("");
  const [category, setCategory] = useState("");

  const onEventInputChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
  ) => setEventFormData({ ...eventFormData, [e.target.name]: e.target.value });

  const addToEvents = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        API_URL + "/events",
        {
          ...eventFormData,
          userId: decodedToken.id,
        },
        {
          headers: {
            Authorization: `bearerToken ${bearerToken}`,
          },
        },
      );
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-100">
      <div className="m-5 w-full max-w-xl rounded-lg bg-white p-5 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Add Event</h1>
        <form onSubmit={addToEvents}>
          <div className="mb-2 grid grid-cols-2 gap-4">
            <InputElement
              icon={<FolderPen size={24} />}
              isRequired={true}
              inputName="Title"
              inputType="text"
              inputId="title"
              inputValue={eventFormData.title}
              inputChange={onEventInputChange}
            />
            <InputElement
              icon={<Text size={24} />}
              isRequired={true}
              inputName="Description"
              inputType="text"
              inputId="shortDescription"
              inputValue={eventFormData.description}
              inputChange={onEventInputChange}
            />
            <InputElement
              icon={<CalendarPlus size={24} />}
              isRequired={true}
              inputName="Event Date"
              inputType="date"
              min={new Date().toISOString().split("T")[0]}
              inputId="date"
              inputValue={eventFormData.date}
              inputChange={onEventInputChange}
            />
            <InputElement
              icon={<MapPinned size={24} />}
              inputName="Location"
              inputType="text"
              isRequired={true}
              inputId="location"
              inputValue={eventFormData.location}
              inputChange={onEventInputChange}
            />
            <InputSelect
              inputName="Mode"
              icon={<LucideCalendarCheck size={24} />}
              selectValue={eventFormData.mode}
              onEventInputChange={onEventInputChange}
              options={[
                { label: "Hybrid", value: "hybrid" },
                { label: "In-Person", value: "in-person" },
                { label: "Online", value: "online" },
              ]}
            />
            <InputSelect
              inputName="Duration"
              icon={<Timer size={24} />}
              selectValue={eventFormData.duration}
              onEventInputChange={onEventInputChange}
              options={[
                { label: "1 Hour", value: "1 hour" },
                { label: "2 Hours", value: "2 hours" },
                { label: "3 Hours", value: "3 hours" },
                { label: "4 Hours", value: "4 hours" },
                { label: "5 Hours", value: "5 hours" },
                { label: "1 Day", value: "1 day" },
              ]}
            />
          </div>
          <AdditionalInput
            values={eventFormData.speakers}
            inputId="speakers"
            inputName="Speakers"
            icon={<Speech size={24} />}
            inputValue={speaker}
            eventFormData={eventFormData}
            onInputChange={(e) => setSpeaker(e.target.value)}
            onClick={() => {
              setEventFormData({
                ...eventFormData,
                speakers: [...eventFormData.speakers, speaker.trim()],
              });
              setSpeaker("");
              alert("speaker added");
            }}
          />

          <AdditionalInput
            values={eventFormData.categories}
            inputId="categories"
            inputName="Categories"
            icon={<ChartBarStacked size={24} />}
            inputValue={category}
            eventFormData={eventFormData}
            onInputChange={(e) => setCategory(e.target.value)}
            onClick={() => {
              setEventFormData({
                ...eventFormData,
                categories: [...eventFormData.categories, category.trim()],
              });
              setCategory("");
              alert("category added");
            }}
          />

          <AdditionalInput
            values={eventFormData.agendas}
            inputId="agendas"
            inputName="Agendas"
            icon={<NotebookPen size={24} />}
            inputValue={agenda}
            eventFormData={eventFormData}
            onInputChange={(e) => setAgenda(e.target.value)}
            onClick={() => {
              setEventFormData({
                ...eventFormData,
                agendas: [...eventFormData.agendas, agenda.trim()],
              });
              setAgenda("");
              alert("agenda added");
            }}
          />
          <button
            type="submit"
            className="mt-4 w-full cursor-pointer rounded bg-cyan-500 p-2 font-semibold text-white hover:rounded-4xl hover:bg-cyan-700"
          >
            Add to Events
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddEvent;
