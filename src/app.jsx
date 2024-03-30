import React from "react";
import useRouteStore from "./store/routerStore"; // Assuming you have a Zustand store for routing
import SignIn from "./signin.jsx";
import Dashboard from "./dashboard.jsx";
import SalesPage from "./pages/salesPage.js";
import ReportsPage from "./pages/reportsPage.js";
import ProductEntryForm from "./pages/productEntry.js";
import PurchaseInvoice from "./pages/purchaseInvoice.js";

function App() {
  const currentPage = useRouteStore((state) => state.currentPage);

  let content;
  switch (currentPage) {
    case '/main_window':
    case '/main_window/signin':
      content = <SignIn />;
      break;
    case '/main_window/Dashboard':
      content = <Dashboard />;
      break;
    case '/main_window/SalesPage':
      content = <SalesPage />;
      break;
    case '/main_window/Reports':
      content = <ReportsPage />;
      break;
    case '/main_window/Purchase':
      content = <PurchaseInvoice />;
      break;
    case '/main_window/ProductEntry':
      content = <ProductEntryForm />;
      break;
    default:
      content = <SignIn />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default App;
