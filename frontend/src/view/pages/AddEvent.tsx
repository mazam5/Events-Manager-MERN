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
import { ChangeEvent, useState } from "react";
import EventForm from "../../model/add_event";
import AdditionalInput from "../components/AdditionalInput";
import InputElement from "../components/InputElement";
import InputSelect from "../components/InputSelect";

const AddEvent = () => {
  const [eventFormData, setEventFormData] = useState<EventForm>({
    title: "Event Title",
    location: "Hyderabad, India",
    date: new Date().toISOString().split("T")[0],
    duration: "",
    mode: "",
    speakers: [],
    shortDescription: "Event Description",
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

  return (
    <div className="flex h-full flex-col items-center justify-center bg-gray-100">
      <div className="m-5 w-full max-w-xl rounded-lg bg-white p-5 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Add Event</h1>
        <form method="POST">
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
              inputValue={eventFormData.shortDescription}
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
                { label: "1 Hour", value: "60" },
                { label: "2 Hours", value: "120" },
                { label: "3 Hours", value: "180" },
                { label: "4 Hours", value: "240" },
                { label: "5 Hours", value: "300" },
                { label: "1 Day", value: "1440" },
              ]}
            />
          </div>
          <AdditionalInput
            key={1}
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
            key={2}
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
            key={3}
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
          <input
            type="submit"
            onClick={() => {}}
            className="mt-4 w-full cursor-pointer rounded bg-cyan-500 p-2 font-semibold text-white hover:rounded-4xl hover:bg-cyan-700"
            value="Add Event"
          />
        </form>
      </div>
    </div>
  );
};
export default AddEvent;
