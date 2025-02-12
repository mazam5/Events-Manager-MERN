import cors from "cors";
import { configDotenv } from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectDB } from "./src/configs/config_db.js";
import authRoutes from "./src/routes/route_auth.js";
import eventRoutes from "./src/routes/route_event.js";
import { eventSocket } from "./src/socket/socket_event.js";

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

configDotenv();
const PORT = process.env.NODEJS_PORT;
app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Hello APIs!");
});

eventSocket(io);

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

server.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
