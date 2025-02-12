import { Route, Routes } from "react-router-dom";
import Layout from "./view/Layout";
import AddEvent from "./view/pages/AddEvent";
import AuthLoginForm from "./view/pages/AuthLoginForm";
import AuthRegisterForm from "./view/pages/AuthRegisterForm";
import Dashboard from "./view/pages/Dashboard";
import EventDetails from "./view/pages/EventDetails";
import ManageEvents from "./view/pages/ManageEvents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthLoginForm />} />
      <Route path="/login" element={<AuthLoginForm />} />
      <Route path="/register" element={<AuthRegisterForm />} />

      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upcoming-events" element={<Dashboard />} />
        <Route path="/past-events" element={<Dashboard />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/add-event" element={<AddEvent />} />
        <Route path="/manage-events" element={<ManageEvents />} />
      </Route>
    </Routes>
  );
}

export default App;
