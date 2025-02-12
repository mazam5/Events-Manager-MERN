import useAuth from "../../viewmodel/useAuth";

const EventCard = ({
  event,
  index,
  completed,
}: {
  event: {
    title: string;
    description: string;
    location: string;
    dateTime: string;
    mode: string;
  };
  index: number;
  completed: boolean;
}) => {
  const { navigate } = useAuth();
  return (
    <div className="flex flex-col items-center justify-between rounded-xl shadow-md">
      <img
        src={
          index % 2 === 0
            ? "/images/event-1.jpg"
            : index % 3 === 0
              ? "/images/event-3.jpg"
              : "/images/event-2.jpg"
        }
        className="h-64 w-full rounded-t-xl object-cover"
        alt="event image cannot load"
      />
      <div
        className={`${completed ? "h-40 bg-green-400 max-xl:h-56 max-lg:h-40" : "h-48 bg-white max-xl:h-64 max-lg:h-52"} rounded-b-xl bg-white p-4`}
      >
        <h3 className="text-lg font-semibold text-cyan-500 hover:cursor-pointer hover:text-cyan-700 md:text-xl">
          <a>{event.title}</a>
        </h3>
        <div className="my-2 flex items-center justify-center">
          <p className="mx-auto max-xl:text-xs max-md:text-sm">
            {new Date(event.dateTime).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            })}
          </p>
          <span>|</span>
          <p className="mx-auto max-xl:text-xs max-md:text-sm">
            {event.location}
          </p>
          <span>|</span>
          <p className="mx-auto max-xl:text-xs max-md:text-sm">{event.mode}</p>
        </div>
        <p className="mt-2">{event.description}</p>
        {!completed && (
          <div className="flex justify-end">
            <button className="rounded-md bg-cyan-500 p-2 text-white hover:cursor-pointer hover:bg-cyan-700">
              <span onClick={() => navigate("/event/" + index)}>
                I'm Interested
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default EventCard;
