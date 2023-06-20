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

function OffcanvasExample() {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="fixed-top MemNavbar"
        >
          <Container fluid>
            <Link to="/Bloodbank">
            <Navbar.Brand>
              <span className="Span1">Blood</span>
              <span className="Span2">Donate</span>
              <span className="Span3">.</span>
              <span className="Span4">pk</span>
            </Navbar.Brand>
            </Link>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="toggleb"
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
                  <span className="Span1">Blood</span>
                  <span className="Span2">Donate</span>
                  <span className="Span3">.</span>
                  <span className="Span4">pk</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className="Linkas" as={Link} to="/UploadBloodEvents">
                    Upload-Events
                  </Nav.Link>
                  <Nav.Link className="Linkas" as={Link} to="/MainBRequestBH">
                    Request-Blood
                  </Nav.Link>
                  <Nav.Link className="Linkas" as={Link} to="">
                    Chat
                  </Nav.Link>
                  <Nav.Link className="Linkas" as={Link} to="/ManageRecords">
                    Manage-Records
                  </Nav.Link>
                  <Nav.Link className="Linkas" as={Link} to="/StockForm">
                    Manage-Blood-stocks
                  </Nav.Link>
                  <Dropdown className="Dropdown">
                    <Dropdown.Toggle id="dropdown-basic" className="Dtoggle">
                      <AccountCircleIcon className="Dicon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="Dmenu">
                      <Dropdown.Item as={Link} to="/BankProfile" className="Dlink">
                        View Profile
                      </Dropdown.Item>
                      <NavDropdown.Divider className="Divider" />
                      <Dropdown.Item as={Link} to="/BankProfile" className="Dlink">
                        Edit Profile
                      </Dropdown.Item>
                      <NavDropdown.Divider className="Divider" />
                      <Dropdown.Item as={Link} to="" className="Dlink">
                        Logout <LogoutIcon className="Dlink" />
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
