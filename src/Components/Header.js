import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container className="container">
        <Navbar.Brand as={Link} to="/">
          Food Ordering App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/myorders">
              My Orders
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
