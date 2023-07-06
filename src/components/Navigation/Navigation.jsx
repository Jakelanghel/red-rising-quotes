import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="brand fs-4">
            RR Quotes
          </Navbar.Brand>
          <Nav className="fs-6">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/search" className="nav-link">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/game" className="nav-link">
              Game
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
