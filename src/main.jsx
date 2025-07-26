import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Contact";
import DigitalTransformation from "./DigitalTransformation";
import ITLeadershipCoaching from "./ITLeadershipCoaching";
import ProjectManagement from "./ProjectManagement";
import AboutPage from "./AboutPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/digital-transformation" element={<DigitalTransformation />} />
      <Route path="/it-leadership-coaching" element={<ITLeadershipCoaching />} />
      <Route path="/project-management" element={<ProjectManagement />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </Router>
);
