import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import lappora from "../../User-images/lappora_icon.png"; // importing the logo image
import "./navBar.css";

function NavScrollExample() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src={lappora}
              alt="Lappora Logo"
              style={{ height: "70px", width: "auto" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <NavDropdown
                title="Laptop Categories"
                id="navbarScrollingDropdown"
                className="custom-dropdown"
              >
                <NavDropdown.Item href="#action1">
                  Gaming Laptops
                </NavDropdown.Item>
                <NavDropdown.Item href="#action2">
                  Business Laptops
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                  Budget Laptops
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">
                  Student Laptops
                </NavDropdown.Item>
                <NavDropdown.Item href="#action6">
                  Who need tablets
                </NavDropdown.Item>
                <NavDropdown.Item href="#action7">2 in one</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action1">Cart Section</Nav.Link>
              <Nav.Link href="#action1">Order Section</Nav.Link>
              <Nav.Link href="#action1">News</Nav.Link>
              <Nav.Link href="#action1">How TO</Nav.Link>
              <Nav.Link href="#action1">Services</Nav.Link>
              <Nav.Link href="#action1">About Us</Nav.Link>
              <Nav.Link href="#action1">Contact Us</Nav.Link>
              <Dropdown className="Account-dropdown">
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="custom-dropdown"
                >
                  Account
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavScrollExample;
