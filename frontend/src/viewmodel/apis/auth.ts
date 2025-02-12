import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (credentials: {
  email: string;
  password: string;
}) => {
  return await axios.post(`${API_URL}/api/auth/login`, credentials);
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return await axios.post(`${API_URL}/api/auth/register`, data);
};
