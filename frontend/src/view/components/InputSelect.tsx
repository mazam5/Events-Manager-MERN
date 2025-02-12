import { ChangeEvent } from "react";

const InputSelect = ({
  icon,
  inputName,
  inputValue,
  inputChange,
  inputId,
  options,
}: {
  icon: React.ReactNode;
  inputValue: string;
  inputName: string;
  inputId: string;
  inputChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
}) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={inputId}
        className="mt-2 block text-sm font-medium text-gray-700"
      >
        {inputName}
      </label>
      <div className="mt-1 flex items-center justify-between rounded border hover:rounded-3xl hover:border-cyan-500">
        <div className="mx-2">{icon}</div>
        <select
          value={inputValue}
          onChange={inputChange}
          id={inputId}
          name={inputId}
          className="block w-full rounded border border-gray-300 px-3 py-2 font-medium shadow-sm hover:rounded-3xl focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default InputSelect;
