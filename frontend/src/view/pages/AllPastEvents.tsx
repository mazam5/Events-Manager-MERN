import useEvents from "../../viewmodel/useEvents";
import EventCard from "../components/EventCard";

const AllPastEvents = () => {
  const { events } = useEvents();
  return (
    <div>
      <div className="container mx-auto p-4 md:p-8">
        <div className="flex">
          <h2 className="text-2xl font-semibold">All Past Events</h2>
        </div>
        <div className="my-4 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {events
            // .filter(
            //   (event) => Date.parse(event.date) > new Date().getTime(),
            // )
            .map((event, index) => (
              <div key={index}>
                <EventCard event={event} index={index} completed={false} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default AllPastEvents;
