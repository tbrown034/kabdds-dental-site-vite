import React from "react";
import { Icon } from "semantic-ui-react";
import { Row, Col } from "react-bootstrap";

const Statistics = () => (
  <div className="statGroup primary-color">
    <h2 className="quad-color">"Not Every Dentist Does This"</h2>
    <h4 className="italics bottom-padding quad-color">What it Takes to Become a Fellow</h4>
    <Row className="justify-content-center">
      <Col md="auto" className="text-center">
        <h1>6%</h1>
        <h5>OF U.S. DENTISTS BECOME A FELLOW</h5>
      </Col>
      <Col md="auto" className="text-center">
        <h1>500 HOURS</h1>
        <h5>REQUIRED OF CONTINUING EDUCATION</h5>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Col md="auto" className="text-center">
        <h1>350 HOURS</h1>
        <h5>REQUIRED OF LIVE COURSES</h5>
      </Col>
      <Col md="auto" className="text-center">
        <h1>
          <Icon name="book" />
        </h1>
        <h5>MUST PASS A BOARD-CERTIFIED EXAM</h5>
      </Col>
    </Row>
  </div>
);

export default Statistics;
