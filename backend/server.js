import cors from "cors";
import { configDotenv } from "dotenv";
import express from "express";
import { Server } from "socket.io";

configDotenv();

const app = express();
const io = new Server(process.env.SOCKET_PORT);
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Hello API!");
});

app.listen(process.env.NODEJS_PORT, () => {
  console.log(`Server is running on port ${process.env.NODEJS_PORT}`);
});
