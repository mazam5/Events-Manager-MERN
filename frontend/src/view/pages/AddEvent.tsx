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
import useAddEvent from "../../viewmodel/useAddEvent";
import AdditionalInput from "../components/AdditionalInput";
import InputElement from "../components/InputElement";
import InputSelect from "../components/InputSelect";

const AddEvent = () => {
  const {
    addToEvents,
    eventFormData,
    onEventInputChange,
    speaker,
    agenda,
    category,
    setCategory,
    setAgenda,
    setEventFormData,
    setSpeaker,
  } = useAddEvent();

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
              inputId="description"
              inputValue={eventFormData.description}
              inputChange={onEventInputChange}
            />
            <InputElement
              icon={<CalendarPlus size={24} />}
              isRequired={true}
              inputName="Event Date"
              inputType="date"
              // min={new Date().toISOString().split("T")[0]}
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
              inputId="mode"
              inputName="Mode"
              icon={<LucideCalendarCheck size={24} />}
              inputValue={eventFormData.mode}
              inputChange={onEventInputChange}
              options={[
                { label: "Hybrid", value: "hybrid" },
                { label: "In-Person", value: "in-person" },
                { label: "Online", value: "online" },
              ]}
            />
            <InputSelect
              inputId="duration"
              inputName="Duration"
              icon={<Timer size={24} />}
              inputValue={eventFormData.duration}
              inputChange={onEventInputChange}
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
                speakers: [...eventFormData.speakers, speaker],
              });
              setSpeaker("");
            }}
            onRemove={(index) => {
              const newSpeakers = eventFormData.speakers.filter(
                (_, i) => i !== index,
              );
              setEventFormData({ ...eventFormData, speakers: newSpeakers });
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
                categories: [...eventFormData.categories, category],
              });
              setCategory("");
            }}
            onRemove={(index) => {
              const newCategories = eventFormData.categories.filter(
                (_, i) => i !== index,
              );
              setEventFormData({ ...eventFormData, categories: newCategories });
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
                agendas: [...eventFormData.agendas, agenda],
              });
              setAgenda("");
            }}
            onRemove={(index) => {
              const newAgendas = eventFormData.agendas.filter(
                (_, i) => i !== index,
              );
              setEventFormData({ ...eventFormData, agendas: newAgendas });
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
