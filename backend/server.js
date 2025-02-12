import cors from "cors";
import { configDotenv } from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { connectDB } from "./src/configs/config_db.js";
import authRoutes from "./src/routes/route_auth.js";
import eventRoutes from "./src/routes/route_event.js";
import { eventSocket } from "./src/socket/socket_event.js";
configDotenv();

const app = express();
const PORT = process.env.NODEJS_PORT;

// Socket.IO
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

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

app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);
});
eventSocket(io);

server.listen(PORT, () => {
  connectDB();
  console.log(`🚀 Node.js Server running on port http://localhost:${PORT}`);
});
