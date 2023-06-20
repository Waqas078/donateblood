import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import LogoutIcon from "@mui/icons-material/Logout";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import "./Sidenav.css";
import useAuth from "../../../hooks/useAuth";

function OffcanvasExample() {
  const { logout } = useAuth();
  return (
    <div>
      {["xxl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="fixed-top MemNavbar">
          <Container fluid>
            <Link to="/Member">
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
                <Nav className="justify-content-end flex-grow-1 pe-3 Navcolor">
                  <Nav.Link
                    className="Linkas"
                    as={Link}
                    to="/MemberDonate/"
                    id="Linkas"
                  >
                    Donate Blood
                  </Nav.Link>
                  <Nav.Link
                    className="Linkas"
                    as={Link}
                    to="/MemberRequest"
                    id="Linkas"
                  >
                    Request Blood
                  </Nav.Link>
                  <Nav.Link className="Linkas" as={Link} to="" id="Linkas">
                    Chat
                  </Nav.Link>
                  <div className="Dropdown">
                    <Dropdown
                      className="Dropdown"
                      id="Dropdown"
                      style={{ marginTop: "15px" }}
                    >
                      <Dropdown.Toggle id="dropdown-basic" className="Dtoggle">
                        <AccountCircleIcon className="Dicon" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="Dmenu">
                        <Dropdown.Item
                          as={Link}
                          to="/UserProfile"
                          className="Dlink"
                        >
                          View Profile
                        </Dropdown.Item>
                        <NavDropdown.Divider className="Divider" />
                        <Dropdown.Item
                          as={Link}
                          to="/UserProfile"
                          className="Dlink"
                        >
                          Edit Profile
                        </Dropdown.Item>
                        <NavDropdown.Divider className="Divider" />
                        <button
                          className="Logout"
                          onClick={(e) => {
                            logout();
                          }}
                        >
                          Logout <LogoutIcon className="Dlink" />
                        </button>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default OffcanvasExample;
