import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../CONSTANTS";

const useAuth = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "test123@gmail.com",
    password: "@Test#123",
  });
  const [registerData, setRegisterData] = useState({
    name: "Test User",
    email: "test123@gmail.com",
    password: "@Test#123",
    confirmPassword: "@Test#123",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onLoginChange = (e: ChangeEvent<HTMLInputElement>) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onRegisterChange = (e: ChangeEvent<HTMLInputElement>) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const submitLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(API_URL + "/auth/login", loginData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
        setLoginData({ email: "", password: "" });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(API_URL + "/auth/register", {
        username: registerData.name,
        email: registerData.email,
        password: registerData.password,
      });
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    navigate,
    onLoginChange,
    onRegisterChange,
    submitLogin,
    submitRegister,
    loginData,
    registerData,
    setLoginData,
    setRegisterData,
    showPassword,
    setShowPassword,
  };
};

export default useAuth;
