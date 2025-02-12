import { Lock, Mail } from "lucide-react";
import useAuth from "../../viewmodel/useAuth";
import InputElement from "../components/InputElement";
const AuthLoginForm = () => {
  const { loginData, onLoginChange, submitLogin, navigate } = useAuth();
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form className="mt-4" method="POST">
          <div className="mb-4">
            <InputElement
              icon={<Mail size={24} />}
              isRequired={true}
              inputName="Email"
              inputType="email"
              inputId="email"
              inputValue={loginData.email}
              inputChange={onLoginChange}
            />
            <InputElement
              icon={<Lock size={24} />}
              isRequired={true}
              inputName="Password"
              inputType="password"
              inputId="password"
              inputValue={loginData.password}
              inputChange={onLoginChange}
              onKeyDown={(e) => e.key === "Enter" && submitLogin()}
            />
            <input
              type="submit"
              onClick={submitLogin}
              className="mt-4 w-full cursor-pointer rounded bg-cyan-500 p-2 font-semibold text-white hover:rounded-4xl hover:bg-cyan-700"
              value="Login"
            />
          </div>
        </form>
        <p className="my-4 text-center text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-cyan-500 hover:cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
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

export default AuthLoginForm;
