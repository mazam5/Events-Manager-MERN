import { ChevronRight } from "lucide-react";
import { io } from "socket.io-client";
import useEvents from "../../viewmodel/useEvents";
import EventCard from "../components/EventCard";
import { useEffect } from "react";

const Dashboard = () => {
  const { events, goTo } = useEvents();
  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("connect", () => {
      console.log("Socket connected");
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <div>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex">
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
          <button
            className="ml-auto flex rounded-3xl p-2 text-cyan-500 transition hover:cursor-pointer hover:bg-cyan-500 hover:text-white"
            onClick={() => goTo("/upcoming-events")}
          >
            <span>View All</span>
            <ChevronRight />
          </button>
        </div>
        <div className="my-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {events
            // .filter(
            //   (event) => Date.parse(event.date) > new Date().getTime(),
            // )
            .slice(0, 3)
            .map((event, index) => (
              <div key={index}>
                <EventCard
                  event={event}
                  index={index}
                  completed={false}
                  onAttend={() => {}}
                />
              </div>
            ))}
        </div>
      </div>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex">
          <h2 className="text-2xl font-semibold">Past Events</h2>
          <button
            className="ml-auto flex rounded-3xl p-2 text-cyan-500 transition hover:cursor-pointer hover:bg-cyan-500 hover:text-white"
            onClick={() => goTo("/past-events")}
          >
            <span>View All</span>
            <ChevronRight />
          </button>
        </div>
        <div className="my-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {events
            // .filter(
            //   (event) => Date.parse(event.dateTime) < new Date().getTime(),
            // )
            .slice(0, 3)
            .map((event, index) => (
              <div key={index}>
                <EventCard event={event} index={index} completed={true} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
