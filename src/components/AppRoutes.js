import { Routes, Route, Navigate } from "react-router-dom";
import AddCustomer from "../views/AddCustomer";
import Home from "../views/Home";
import Login from "../views/Login";
import SingleCustomer from "../views/SingleCustomer";

const AppRoutes = (props) => {
  const ProtectedRoute = ({ children }) => {
    const token = props.user?.jwt || null;

    if (!token) {
      return <Navigate to={process.env.WEB_HOST ? "/" + process.env.WEB_HOST : "/"} replace />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path={process.env.WEB_HOST ? "/" + process.env.WEB_HOST : "/"}
        element={<Login user={props.user} setUser={props.setUser} />}
      />

      <Route
        path={
          process.env.WEB_HOST
            ? "/" + process.env.WEB_HOST + "/customers"
            : "/customers"
        }
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path={
          process.env.WEB_HOST
            ? "/" + process.env.WEB_HOST + "/add-customer"
            : "/add-customer"
        }
        element={
          <ProtectedRoute>
            <AddCustomer />
          </ProtectedRoute>
        }
      />

      <Route
        path={
          process.env.WEB_HOST
            ? "/" + process.env.WEB_HOST + "/customer/:id"
            : "/customer/:id"
        }
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
