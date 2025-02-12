import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
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
  const onLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onRegisterChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const submitLogin = async (e) => {
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

  const submitRegister = async (e) => {
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
  };
};

export default useAuth;
