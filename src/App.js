import React from "react";
import NotifWarga from "./components/notif/notifikasi.";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeDashboard from "./components/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/notifikasi." element={<NotifWarga />} />
        <Route path="/" element={<HomeDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
