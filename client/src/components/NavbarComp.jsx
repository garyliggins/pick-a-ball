import React from "react";
import { navigate, Link } from "@reach/router";
// bootstrap styles
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const NavbarComp = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home" style={{ color: "#ffff" }}>
          Pick a Ball
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link
                href="#home"
                className="navItem"
                style={{ color: "#ffff" }}
              >
                Home
              </Nav.Link>
            </Link>
            <Link to="/createGame">
              <Nav.Link
                href="#link"
                className="navItem"
                style={{ color: "#ffff" }}
              >
                Create
              </Nav.Link>
            </Link>
            <Link to="/updateGame">
              <Nav.Link
                href="#link"
                className="navItem"
                style={{ color: "#ffff" }}
              >
                MyGames
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* signed in as nav */}
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#login" style={{ color: "#ffff" }}>
              users name here
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
