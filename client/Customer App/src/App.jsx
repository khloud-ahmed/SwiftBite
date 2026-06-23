import { Routes, Route } from "react-router-dom";


import DiscoverRestaurant from "./Pages/DiscoverRestaurant";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register"
import Footer from "./component/Footer/footer";

import AdminDashboard from '../src/Pages/AdminDashboard/AdminDashboard'

function App() {
  return (
    <>
      

      <Routes>
        <Route
          path="/"
          element={
            <>
              <DiscoverRestaurant />
                return <AdminDashboard />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;








