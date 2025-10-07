import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router";

function NavBar({ categories }) {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand
          style={{ color: "#fff", fontSize: "30px", fontWeight: "bold" }}
          as={Link}
          to="/"
        >
          JordanStore
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ color: "#fff" }}>
            <NavDropdown
              title={
                <span
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                  }}
                >
                  Categorías
                </span>
              }
              id="basic-nav-dropdown"
            >
              {categories.map((category) => (
                <NavDropdown.Item
                  as={NavLink}
                  to={`/category/${category}`}
                  key={category}
                >
                  {category}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <CartWidget></CartWidget>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
