import "./App.css";
import AppRoutes from "./components/AppRoutes";
import MainNav from "./components/MainNav";

import axios from "axios";
import { Container } from "react-bootstrap";

const App = () => {
  axios.defaults.baseURL = "http://localhost:5050/api";

  return (
    <Container>
      <MainNav />
      <AppRoutes />
    </Container>
  );
};

export default App;
