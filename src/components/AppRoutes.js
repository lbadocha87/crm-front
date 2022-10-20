import { Routes, Route, Navigate } from "react-router-dom";
import AddCustomer from "../views/AddCustomer";
import Home from "../views/Home";
import Login from "../views/Login";
import SingleCustomer from "../views/SingleCustomer";

const AppRoutes = (props) => {
  const ProtectedRoute = ({ children }) => {
    const token = props.user?.jwt || null;

    if (!token) {
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Login user={props.user} setUser={props.setUser} />}
      />

      <Route
        path="/customers"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-customer"
        element={
          <ProtectedRoute>
            <AddCustomer />
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer/:id"
        element={
          <ProtectedRoute>
            <SingleCustomer />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
