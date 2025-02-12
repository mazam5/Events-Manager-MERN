import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onLoginChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onRegisterChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const submitLogin = () => {
    if (!validateEmail(loginData.email)) {
      alert("Invalid email");
      return;
    } else if (!validatePassword(loginData.password)) {
      alert("Invalid Password");
      return;
    }
    // try {
    //   const response = axios.post(
    //     import.meta.env.VITE_API_SERVER1 + "/login",
    //     loginData,
    //   );
    //   console.log(response);
    //   if (response.status === 200) navigate("/dashboard");
    // } catch (error) {
    //   console.error(error);
    // }
    navigate("dashboard");
    console.log(loginData);
  };

  const submitRegister = () => {
    if (!validateEmail(registerData.email)) {
      alert("Invalid email");
      return;
    } else if (!validatePassword(registerData.password)) {
      alert("Invalid Password");
      return;
    } else if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(registerData);
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
