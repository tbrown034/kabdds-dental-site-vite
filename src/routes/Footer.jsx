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
  faUserDoctor
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="primary-bg-color default-padding">
      <Container fluid>
      <Row>
          <Col  lg={3} xs={12} className="center-mobile-text">
            <h5 className="underline">Connect With Us</h5>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <p>1295 Rickert Drive, Naperville, IL 60564</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <p>555-555-5545</p>
            </div>

            <div className="icon-and-text">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p>kabdds@aol.com</p>
            </div>

            <div className="icon-and-text">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
              <p>Facebook</p>
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
              <p>General</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faTeethOpen} className="icon" />
              <p>Cosmetic</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faKitMedical} className="icon" />
              <p>Surgical and Emergency</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faQuestion} className="icon" />
              <p>FAQs</p>
            </div>
          </Col>
          <Col  lg={3} xs={12} className="center-mobile-text">
            <h5 className="underline">Explore</h5>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faUserDoctor} className="icon" />
              <p>About Us</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faMoneyBill} className="icon" />
              <p>Financing</p>
            </div>
            <div className="icon-and-text">
              <FontAwesomeIcon icon={faBuilding} className="icon" />
              <p>Our Location</p>
            </div>

            

            <div className="icon-and-text">
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              <p>Make an Appointmetn</p>
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
