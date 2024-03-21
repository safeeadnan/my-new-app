import React, { useState } from "react";
import SignIn from "./signin.jsx";
import Dashboard from "./dashboard.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/main_window" element={<SignIn />} />
        <Route path="/main_window/signin" element={<SignIn />} />
        <Route path="/main_window/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );

}

export default App;