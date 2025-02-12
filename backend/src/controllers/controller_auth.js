import { loginUser, registerUser } from "../services/service_auth.js";

export const register = async (req, res) => {
  try {
    const { user, token } = await registerUser(req.body);
    res
      .status(201)
      .json({ message: "User registered successfully", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { user, token } = await loginUser(req.body);
    res.json({ message: "Login successful", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
