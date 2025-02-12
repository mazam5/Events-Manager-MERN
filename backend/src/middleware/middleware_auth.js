import jwt from "jsonwebtoken";
import User from "../models/Model_User.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded.id).select("-password"); // Exclude password from user data

    if (!user) {
      return res.status(401).json({ error: "Unauthorized: User not found" });
    }

    req.user = user; // Attach user data to request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};
