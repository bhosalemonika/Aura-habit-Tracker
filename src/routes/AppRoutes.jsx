import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/login.jsx";
import Onboarding from "../pages/Onboarding.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import { StandaloneAddHabit, StandaloneMyHabits } from "./StandaloneRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/habits" element={<StandaloneMyHabits />} />
      <Route path="/add-habit" element={<StandaloneAddHabit />} />
    </Routes>
  );
}

export default AppRoutes;