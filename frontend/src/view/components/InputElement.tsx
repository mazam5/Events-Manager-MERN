import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, KeyboardEvent } from "react";

const InputElement = ({
  inputChange,
  inputName,
  inputType,
  inputId,
  inputValue,
  min,
  icon,
  isRequired = false,
  onKeyDown,
  showPassword,
  onShowPassword,
  isPassword,
}: {
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputName: string;
  inputType: string;
  inputId: string;
  inputValue: string;
  icon: React.ReactNode;
  isRequired?: boolean;
  min?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  showPassword?: boolean;
  onShowPassword?: () => void;
  isPassword?: boolean;
}) => {
  return (
    <div>
      <label
        htmlFor={inputId}
        className="mt-2 block text-sm font-medium text-gray-700"
      >
        {inputName}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="mt-1 flex items-center justify-between rounded border hover:rounded-3xl hover:border-cyan-500">
        <div className="mx-2">{icon}</div>
        <input
          onKeyDown={onKeyDown}
          min={min}
          required={isRequired}
          type={inputType}
          name={inputId}
          id={inputId}
          value={inputValue}
          onChange={inputChange}
          className="block w-full rounded border border-gray-300 px-3 py-2 text-xl font-medium shadow-sm hover:rounded-3xl focus:border-cyan-500 focus:ring-cyan-500 focus:outline-none sm:text-sm"
        />
        {isPassword && (
          <button
            className="mx-2 rounded-full p-1 hover:cursor-pointer hover:bg-gray-200"
            type="button"
            onClick={onShowPassword}
          >
            {showPassword ? <EyeOff size={24} /> : <Eye size={24} />}
          </button>
        )}
      </div>
    </div>
  );
};
export default InputElement;
