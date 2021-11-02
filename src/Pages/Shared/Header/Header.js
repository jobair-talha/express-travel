import React from "react";
import Logo from "../../../images/logo/travelLogo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/service">
              Tours
            </Nav.Link>
            <Nav.Link as={Link} to="/create-service">
              Create Services
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              {user.displayName}
            </Nav.Link>
            {user?.email ? (
              <Nav.Link as={Link} to="/home" onClick={logOut}>
                LogOut
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
