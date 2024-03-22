import React, { useState } from "react";
import SignIn from "./signin.jsx";
import Dashboard from "./dashboard.jsx";
import SalesPage from "./pages/salesPage.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/main_window" element={<SalesPage />} />
        <Route path="/main_window/signin" element={<SignIn />} />
        <Route path="/main_window/Dashboard" element={<Dashboard />} />
        <Route path="/main_window/SalesPage" element={<SalesPage />} />
      </Routes>
    </Router>
  );

}

export default App;