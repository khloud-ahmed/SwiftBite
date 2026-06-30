import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import RestaurantDetails from "./Pages/RestaurantDetails/RestaurantDetails";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import RestaurantDashboard from "./Pages/RestaurantDashboard/RestaurantDashboard";

function App() {
  return (
    <Routes>

    <Route
        path="/"
        element={<Home />}
    />

    <Route
        path="/restaurant"
        element={<RestaurantDetails />}
    />

    <Route
        path="/login"
        element={<Login />}
    />

    <Route
        path="/register"
        element={<Register />}
    />

    <Route
        path="/admin"
        element={<AdminDashboard />}
    />
    <Route
        path="/restaurant-dashboard"
        element={<RestaurantDashboard />}
      />

</Routes>
  );
}

export default App;