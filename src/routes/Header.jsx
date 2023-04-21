import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Icon } from "semantic-ui-react";
import CallButton from "../components/buttons/CallButton";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="primary-bg-color myHeader"
      as="header"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Keith Brown DDS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/financing">
              Financing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/location">
              Location
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faqs">
              FAQs
            </Nav.Link>
            <NavDropdown title="Dental Services" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/services">
                General Dentistry
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services">
                Cosmetic Dentistry
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/services">
                Emergency/Surgical Dentistry
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/services/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button animated className="myButton">
              <Button.Content visible>
                <Icon name="calendar" /> Make an Appointment
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
           <CallButton />

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
