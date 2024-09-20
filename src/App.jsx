import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import HomeLayout from "./components/HomePage/HomeLayout";
import ManagersLayout from "./components/Managers/ManagersLayout";
import EmployeeLayout from "./components/Employees/EmployeeLayout";
import ProjectLayout from "./components/Projects/ProjectLayout";
import ProfileLayout from "./components/Profiles/ProfileLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomeLayout />} />
        <Route path="/managers" element={<ManagersLayout />} />
        <Route path="/employees" element={<EmployeeLayout />} />
        <Route path="/projects" element={<ProjectLayout />} />
        <Route path="/profile" element={<ProfileLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
