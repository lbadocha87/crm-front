import { Routes, Route } from "react-router-dom";
import AddCustomer from "../views/AddCustomer";
import Home from "../views/Home";
import SingleCustomer from "../views/SingleCustomer";

const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-customer" element={<AddCustomer />} />
      <Route path="/customer/:id" element={<SingleCustomer />} />
    </Routes>
  );
};

export default AppRoutes;
