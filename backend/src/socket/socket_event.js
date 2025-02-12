export const eventSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinEvent", (eventId) => {
      socket.join(eventId);
    });

    socket.on("attendEvent", (eventId) => {
      io.to(eventId).emit("updateAttendees");
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
