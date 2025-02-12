import { Route, Routes } from "react-router-dom";
import Layout from "./view/Layout";
import AddEvent from "./view/pages/AddEvent";
import ManageEvents from "./view/pages/ManageEvents";
import AllPastEvents from "./view/pages/AllPastEvents";
import AuthLoginForm from "./view/pages/AuthLoginForm";
import AuthRegisterForm from "./view/pages/AuthRegisterForm";
import Dashboard from "./view/pages/Dashboard";
import EventDetails from "./view/pages/EventDetails";
import AllUpcomingEvents from "./view/pages/AllUpcomingEvents";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<AuthLoginForm />} />
      <Route path="/register" element={<AuthRegisterForm />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upcoming-events" element={<AllUpcomingEvents />} />
        <Route path="/past-events" element={<AllPastEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/manage-events" element={<ManageEvents />} />
      </Route>
    </Routes>
  );
}

export default App;
