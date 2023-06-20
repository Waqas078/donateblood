import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
import LogoutIcon from "@mui/icons-material/Logout";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Sidenav.css";
import { useEffect, useState } from "react";

function OffcanvasExample() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();
  useEffect(() => {
    if (code === "1") {
      navigate("/");
    }
  }, [navigate, code]);
  const handleLogout = async () => {
    await logout();
    setCode("1");
  };
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="fixed-top MemNavbar">
          <Container fluid>
            <Link to="/Hospital">
              <Navbar.Brand id="Brand">
                <span className="Span1">Donate</span>
                <span className="Span2">Blood</span>
                <span className="Span3">.</span>
                <span className="Span4">pk</span>
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="toggleb"
              id="Togle"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanvas"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="Navbaroff"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  <span className="Span1">Donate</span>
                  <span className="Span2">Blood</span>
                  <span className="Span3">.</span>
                  <span className="Span4">pk</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    className="Linkas"
                    as={Link}
                    to="/UploadHBloodEvents"
                    id="Linkas"
                  >
                    Upload-Events
                  </Nav.Link>
                  <Nav.Link
                    className="Linkas"
                    as={Link}
                    to="/MainRequestBH"
                    id="Linkas"
                  >
                    Request-Blood
                  </Nav.Link>
                  <Nav.Link className="Linkas" as={Link} to="" id="Linkas">
                    Chat
                  </Nav.Link>
                  <Nav.Link
                    className="Linkas"
                    as={Link}
                    to="/ManageHRecords"
                    id="Linkas"
                  >
                    Manage-Records
                  </Nav.Link>
                  <Nav.Link
                    className="Linkas"
                    as={Link}
                    to="/StockHForm"
                    id="Linkas"
                  >
                    Manage-Blood-stocks
                  </Nav.Link>
                  <Dropdown className="Dropdown" id="Dropdown">
                    <Dropdown.Toggle id="dropdown-basic" className="Dtoggle">
                      <AccountCircleIcon className="Dicon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="Dmenu">
                      <Dropdown.Item
                        as={Link}
                        to="/HospitalProfile"
                        className="Dlink"
                      >
                        View Profile
                      </Dropdown.Item>
                      <NavDropdown.Divider className="Divider" />
                      <Dropdown.Item
                        as={Link}
                        to="/HospitalProfile"
                        className="Dlink"
                      >
                        Edit Profile
                      </Dropdown.Item>
                      <NavDropdown.Divider className="Divider" />
                      <Dropdown.Item as={Link} to="" className="Dlink">
                        <button className="Logout" onClick={handleLogout}>
                          Logout <LogoutIcon className="Dlink" />
                        </button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
