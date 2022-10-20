import { Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";

const MainNav = (props) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">CRM</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/add-customer">Dodaj klienta</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNav;
