import { CirclePlus, X } from "lucide-react";
import { ChangeEvent } from "react";
import EventForm from "../../model/add_event";
import InputElement from "./InputElement";
const AdditionalInput = ({
  icon,
  inputValue,
  inputName,
  inputId,
  onInputChange,
  onClick,
  values,
}: {
  icon: React.ReactNode;
  inputValue: string;
  inputId: string;
  values: string[];
  eventFormData: EventForm;
  inputName: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) => {
  return (
    <div className="md:h-24">
      <div className="flex items-end">
        <InputElement
          icon={icon}
          inputName={inputName}
          inputType="text"
          inputId={inputId}
          inputValue={inputValue}
          inputChange={onInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onClick();
            }
          }}
        />
        <button
          className="rounded-md p-2 text-black hover:cursor-pointer hover:text-cyan-500"
          onClick={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <CirclePlus size={24} />
        </button>
      </div>
      <div className="flex flex-wrap items-start justify-start py-1">
        {values.map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg bg-gray-200 p-1"
          >
            <p className="text-sm">{data}</p>
            <button
              className="rounded-md text-black hover:cursor-pointer hover:text-red-500"
              onClick={() => {}}
            >
              <X size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdditionalInput;
