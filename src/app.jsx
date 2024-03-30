import React from "react";
import useRouteStore from "./store/routerStore"; // Assuming you have a Zustand store for routing
import SignIn from "./pages/signin.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SalesPage from "./pages/salesPage.js";
import ReportsPage from "./pages/reportsPage.js";
import ProductEntryForm from "./pages/productEntry.js";
import PurchaseInvoice from "./pages/expiryPage.js";
import ExpiryPage from "./pages/expiryPage.js";

function App() {
  const { currentPage, setCurrentPage } = useRouteStore(); // Retrieve both current page and setCurrentPage function

  React.useEffect(() => {
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, [setCurrentPage]);

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
    case '/main_window/Expiry':
      content = <ExpiryPage />;
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
