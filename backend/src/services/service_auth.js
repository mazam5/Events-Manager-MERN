import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/Model_User.js";

export const registerUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  const token = jwt.sign(
    { id: newUser._id, email: newUser.email, username: newUser.username },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );

  return newUser, token;
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id, email: user.email, username: user.username },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
  return { user, token };
};
