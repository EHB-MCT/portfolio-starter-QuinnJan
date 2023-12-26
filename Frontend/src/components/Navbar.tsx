import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const linkStyles = {
    marginRight: "20px",
    fontSize: "18px",
    color: "#000",
    textDecoration: "none",
  };

  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} style={linkStyles}>
              Customers
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink} style={linkStyles}>
              Cars
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
    </>
  );
}
