import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, Link } from "react-router";
import { useEffect, useState } from "react";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

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
                  {category && capitalize(category)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
