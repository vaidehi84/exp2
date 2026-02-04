import { Navbar, Container, Nav } from "react-bootstrap";

export default function NavBarBootstrap() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Vaidehi Sharma</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link>Dashboard</Nav.Link>
          <Nav.Link>Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
