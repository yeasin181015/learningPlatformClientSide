import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>Webify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Courses</Nav.Link>
            <Nav.Link>FAQ</Nav.Link>
            <Nav.Link>Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link eventKey={2}>Log in</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
