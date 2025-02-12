import { Lock, Mail, Repeat, User } from "lucide-react";
import useAuth from "../../viewmodel/useAuth";
import InputElement from "../components/InputElement";

const AuthRegisterForm = () => {
  const { registerData, submitRegister, onRegisterChange, navigate } =
    useAuth();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <form className="mt-4" onSubmit={submitRegister}>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="hover: text-cyan-600 hover:cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
          <div className="mb-4">
            <InputElement
              icon={<User size={24} />}
              inputName="Name"
              inputType="text"
              inputId="name"
              inputValue={registerData.name}
              inputChange={onRegisterChange}
            />
            <InputElement
              icon={<Mail size={24} />}
              inputName="Email"
              inputType="email"
              inputId="email"
              inputValue={registerData.email}
              inputChange={onRegisterChange}
            />
            <InputElement
              icon={<Lock size={24} />}
              inputName="Password"
              inputType="password"
              inputId="password"
              inputValue={registerData.password}
              inputChange={onRegisterChange}
            />
            <InputElement
              icon={<Repeat size={24} />}
              inputName="Confirm Password"
              inputType="password"
              inputId="confirmPassword"
              inputValue={registerData.confirmPassword}
              inputChange={onRegisterChange}
              // onKeyDown={(e) => e.key === "Enter" && submitRegister}
            />
            <button
              type="submit"
              className="mt-4 w-full cursor-pointer rounded bg-cyan-500 p-2 font-semibold text-white hover:rounded-4xl hover:bg-cyan-700"
            >
              Register
            </button>
          </div>
        </form>
        <p className="mb-2 text-center">OR</p>
        <p className="text-center text-sm">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full rounded bg-green-500 p-2 font-semibold text-white hover:cursor-pointer hover:rounded-4xl hover:bg-green-700"
          >
            Guest Login
          </button>
        </p>
      </div>
    </div>
  );
};
export default AuthRegisterForm;
