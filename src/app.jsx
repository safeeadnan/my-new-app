import React, { useState } from "react";
import SignIn from "./signin.jsx";
import Dashboard from "./dashboard.jsx";
import SalesPage from "./pages/salesPage.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ReportsPage from "./pages/reportsPage.js";
import ProductEntryForm from "./pages/productEntry.js";
import PurchaseInvoice from "./pages/purchaseInvoice.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/main_window" element={<ReportsPage />} />
        <Route path="/main_window/signin" element={<SignIn />} />
        <Route path="/main_window/Dashboard" element={<Dashboard />} />
        <Route path="/main_window/SalesPage" element={<SalesPage />} />
        <Route path="/main_window/Reports" element={<ReportsPage />} />
        <Route path="/main_window/Purchase" element={<PurchaseInvoice />} />
        <Route path="/main_window/ProductEntry" element={<ProductEntryForm />} />
        <Route exact path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );

}

export default App;