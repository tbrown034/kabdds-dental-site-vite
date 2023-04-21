import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faCalendar,
  faTooth,
  faTeethOpen,
  faQuestion,
  faKitMedical,
  faBuilding,
  faCalendarAlt,
  faMoneyBill,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const phoneNumber = "(630) 555-5555";
  const email = "kabdds@aol.com";
  const facebookAddress = "https://www.facebook.com/KeithABrownDDS/";
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to call?");
    if (confirmed) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <footer className="primary-bg-color default-padding">
      <Container fluid>
        <Row>
          <Col lg={3} xs={12} className="center-mobile-text">
            <h5 className="underline">Connect With Us</h5>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <Link to="/location">
                <p>1295 Rickert Drive, Naperville, IL 60564</p>
              </Link>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faPhone} className="icon" />

              <a href="#" onClick={handleClick}>
                <p>{phoneNumber}</p>
              </a>
            </div>

            <div className="icon-and-text">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />

              <a href={`mailto:${email}`}>
                <p>{email}</p>
              </a>
            </div>

            <div className="icon-and-text">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              <a href={`${facebookAddress}`}>
                <p>Facebook</p>
              </a>
            </div>
          </Col>
          <Col lg={3} xs={12} className="center-mobile-text">
            <h5 className="underline">Availability</h5>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <p>Monday & Tuesday: 9 a.m. to 5 p.m.</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <p>Wednesday: 9 a.m. to 9 p.m.</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <p>Thursday & Friday: 9 a.m. to 5 p.m.</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faCalendar} className="icon" />
              <p> Weekends: 5 p.m. to 9 p.m.</p>
            </div>
          </Col>
          <Col lg={3} xs={12} className="center-mobile-text">
            <h5 className="underline">Dental Services</h5>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faTooth} className="icon" />
              <Link to="/services">
                <p>General</p>
              </Link>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faTeethOpen} className="icon" />
              <Link to="/services">
                <p>Cosmetic</p>
              </Link>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faKitMedical} className="icon" />
              <Link to="/services">
                <p>Surgical and Emerency</p>
              </Link>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faQuestion} className="icon" />
              <Link to="/faqs">
                <p>Frequently Asked Questions</p>
              </Link>
            </div>
          </Col>
          <Col lg={3} xs={12} className="center-mobile-text">
            <h5 className="underline">Explore</h5>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faUserDoctor} className="icon" />
              <Link to="/about">
                <p>About Us</p>
              </Link>{" "}
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faMoneyBill} className="icon" />
              <Link to="/financing">
                <p>Financing</p>
              </Link>{" "}
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faBuilding} className="icon" />
              <Link to="/location">
                <p>Our Location</p>
              </Link>{" "}
            </div>

            <div className="icon-and-text">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <Link to="/appointment">
                <p>Make an Appointment</p>
              </Link>
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <p className="text-center text-muted">© 2023 Keith Brown DDS FAGD</p>
        <p className="text-center ">
          Created by <a href="https://helloimtrevor.com/">TB Web & Design</a>
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
