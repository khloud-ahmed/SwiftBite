// src/pages/AdminDashboard.jsx
import { useState } from "react";
import Sidebar from "../../component/AdminDashboard/Sidebar";
import Overview from "../../component/AdminDashboard/Overview";
import UsersManagement from "../../component/AdminDashboard/UsersManagement";
import DriversManagement from "../../component/AdminDashboard/DriversManagement";
import RestaurantsManagement from "../../component/AdminDashboard/RestaurantsManagement";
import AccountCreation from "../../component/AdminDashboard/AccountCreation";
import Analytics from "../../component/AdminDashboard/Analytics";

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("overview");

  const renderPage = () => {
    switch (activePage) {
      case "overview":    return <Overview />;
      case "users":       return <UsersManagement />;
      case "drivers":     return <DriversManagement />;
      case "restaurants": return <RestaurantsManagement />;
      case "create":      return <AccountCreation />;
      case "analytics":   return <Analytics />;
      default:            return <Overview />;
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "#F5F4F1", fontFamily: "Inter, sans-serif" }}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main style={{ flex: 1, overflowY: "auto", padding: "32px" }}>
        {renderPage()}
      </main>
    </div>
  );
}
