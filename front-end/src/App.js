//import logo from "./logo.svg";
import "./App.css";
import DeliverHome from "./components/DeliverHome";
//import Home from "./pages/Home";
import Delivery from "./components/Delivery";
 
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import DeliveryDetail from "./components/Deliverydetail";
import AddDelivery from "./components/AddDelivery";
import DrivervehicleDetails from "./components/DrivervehicleDetails";
import Settings from "./components/Settings";
import Logout from "./components/Logout";
import DeliverAdminProfile from "./components/DeliverAdminProfile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DeliverHome />} />
          <Route path="profile" element={<DeliverAdminProfile />} />
          <Route path="dashboard" element={<Delivery />} />
          {/*  <Route path="delivery" element={<Delivery />} />/> Default route for "/" */}
          <Route path="deliverydetail" element={<DeliveryDetail />} />
          <Route path="adddelivery" element={<AddDelivery />} />
          <Route
            path="drivervehicledetails"
            element={<DrivervehicleDetails />}
          />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
          {/* Route for machines */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
