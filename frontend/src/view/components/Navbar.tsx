import { BadgePlus, LogOut, X } from "lucide-react";
import { useState } from "react";
import useAuth from "../../viewmodel/useAuth";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { navigate } = useAuth();
  return (
    <nav className="w-full bg-cyan-500 text-white">
      <div className="flex items-center justify-between p-2">
        <h2
          className="text-2xl font-medium hover:cursor-pointer md:text-3xl"
          onClick={() => navigate("/dashboard")}
        >
          Events Management
        </h2>
        <div className="flex">
          <button
            onClick={() => navigate("/add-event")}
            className="flex items-center justify-center p-2 transition-shadow hover:cursor-pointer hover:rounded-2xl hover:bg-cyan-700 hover:text-white"
          >
            <span>Add Event</span>
            <BadgePlus size={24} />
          </button>
          <button
            onClick={() => navigate("/manage-events")}
            className="flex items-center justify-center p-2 transition-shadow hover:cursor-pointer hover:rounded-2xl hover:bg-cyan-700 hover:text-white"
          >
            <span>Manage Events</span>
          </button>
        </div>
        <div>
          <button
            onClick={() => setShowLogout(true)}
            className="flex p-2 transition-shadow hover:cursor-pointer hover:rounded-2xl hover:bg-red-500 hover:text-white"
          >
            <p className="mr-1">Logout</p>
            <LogOut size={24} />
          </button>
        </div>
      </div>
      {showLogout && <LogoutModal setShowLogout={setShowLogout} />}
    </nav>
  );
};
export default Navbar;

const LogoutModal = (props: { setShowLogout: (value: boolean) => void }) => {
  const { navigate } = useAuth();
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/85">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-black">Confirmation</h2>
          <button
            className="rounded-md p-2 text-black transition hover:cursor-pointer hover:bg-blue-500 hover:text-white"
            type="button"
            onClick={() => props.setShowLogout(false)}
          >
            <X />
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-xl text-black">Are you sure want to Logout?</h2>
        </div>
        <div className="mt-4 flex justify-end">
          <div className="flex justify-end gap-4">
            <button
              onClick={() => props.setShowLogout(false)}
              className="rounded-md bg-blue-500 p-2 text-white hover:cursor-pointer hover:bg-blue-700"
            >
              Cancel
            </button>
            <button
              className="rounded-md border p-2 text-black hover:cursor-pointer hover:bg-red-500 hover:text-white"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
