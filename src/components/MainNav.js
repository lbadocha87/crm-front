import { Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

const MainNav = (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.setUser(null);
    localStorage.setItem("user", null);
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          CRM
        </Navbar.Brand>
        <Nav className="me-auto">
          {props.user && (
            <Nav.Link as={Link} to="/add-customer">
              Dodaj klienta
            </Nav.Link>
          )}
          {props.user && (
            <Nav.Link as={Link} to="/" onClick={logout}>
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNav;
