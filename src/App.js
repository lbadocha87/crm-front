import "./App.css";
import AppRoutes from "./components/AppRoutes";
import MainNav from "./components/MainNav";

import axios from "axios";
import { Container } from "react-bootstrap";
import { useState } from "react";

const App = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  

  axios.defaults.baseURL = process.env.API_HOST || "https://quiet-beyond-09104.herokuapp.com/api";
  axios.defaults.headers.common["x-auth-token"] = user ? user.jwt : ""
  return (
    <Container>
      <MainNav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
    </Container>
  );
};

export default App;
