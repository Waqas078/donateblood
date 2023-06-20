import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaBars } from "react-icons/fa";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { MobileIcon } from "./NavElements";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbarr = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar className={navbar ? "fixed-top active" : "fixed-top"}>
      <Container fluid className="fluid">
        <NavbarBrand className="Navbrand">
          <img src={require("./logo.png")} />
        </NavbarBrand>
        <Nav className="me-auto my-2 my-lg-0 done">
          <Nav.Link id="Linkui" as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link
            id="Linkui"
            as={Link}
            to="/AboutMain"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            About Us
          </Nav.Link>
          <Nav.Link id="Linkui" href="#action1">
            Annoucnment
          </Nav.Link>
          {/* <Nav.Link
            id="Linkui"            
          >
            FAQ
          </Nav.Link> */}
          <Nav.Link
            id="Linkui"
            as={Link}
            to="/Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact Us
          </Nav.Link>

          {/* <Nav.Link className="Linki" as={Link} to='/Chat' spy={true} smooth={true} offset={50} duration={500}>
            Chat
          </Nav.Link> */}
        </Nav>
        <Link to="/Login">
          <div className="Loicon">
            <AccountCircleIcon className="icon" />
            <br />
            <span className="span">Login</span>
          </div>
        </Link>
        <MobileIcon className="Mobile" onClick={toggle}>
          <FaBars className="fabar" />
        </MobileIcon>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
