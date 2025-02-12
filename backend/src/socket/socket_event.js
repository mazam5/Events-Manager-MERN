// export const eventSocket = (io) => {
//   io.on("connection", (socket) => {
//     console.log("User connected:", socket.id);

//     socket.on("joinEvent", (eventId) => {
//       socket.join(eventId);
//     });

//     socket.on("attendEvent", (eventId) => {
//       io.to(eventId).emit("updateAttendees");
//     });

//     socket.on("disconnect", () => {
//       console.log("User disconnected");
//     });
//   });
// };

// Store event attendees in memory (or fetch from DB)
let eventAttendees = {};

export const eventSocket = (io) => {
  // WebSocket connection handling
  io.on("connection", (socket) => {
    console.log(`🔥 User connected: ${socket.id}`);

    socket.on("joinEvent", (eventId) => {
      socket.join(eventId);
      console.log(`User joined event room: ${eventId}`);

      // Send current attendee list when user joins
      if (eventAttendees[eventId]) {
        io.to(eventId).emit("updateAttendees", eventAttendees[eventId]);
      }
    });

    socket.on("newAttendee", ({ eventId, attendee }) => {
      if (!eventAttendees[eventId]) {
        eventAttendees[eventId] = [];
      }

      // Prevent duplicate attendees
      if (!eventAttendees[eventId].some((a) => a.id === attendee.id)) {
        eventAttendees[eventId].push(attendee);
      }

      console.log(`New attendee added to event ${eventId}:`, attendee);

      // Notify all users in the event room
      io.to(eventId).emit("updateAttendees", eventAttendees[eventId]);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};
