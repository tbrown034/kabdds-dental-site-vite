import React from "react";
import { Icon } from "semantic-ui-react";
import { Row, Col, Card,  } from "react-bootstrap";

const Statistics = () => (
    <Card className="default-padding secondary-bg-color center-text round-box">
      <Card.Body className="primary-color">
        <Card.Title className="italics bottom-padding " as="h1">"Not Every Dentist Does This"</Card.Title>

        <Row className="justify-content-center">
          <Col md="auto" className="text-center">
            <h1>6%</h1>
            <h4>OF U.S. DENTISTS BECOME A FELLOW</h4>
            <hr
              style={{ width: "50%", margin: "10px auto", color: "whitesmoke" }}
            />
          </Col>
          <Col md="auto" className="text-center">
            <h1>500 HOURS</h1>
            <h4>REQUIRED OF CONTINUING EDUCATION</h4>
            <hr
              style={{ width: "50%", margin: "10px auto", color: "whitesmoke" }}
            />
          </Col>
        </Row>
        <Col md="auto" className="text-center">
          <h1>350 HOURS</h1>
          <h4>REQUIRED OF LIVE COURSES</h4>
          <hr
            style={{ width: "50%", margin: "10px auto", color: "whitesmoke" }}
          />
        </Col>
        <Col md="auto" className="text-center">
          <h1>
            <Icon name="book" />
          </h1>
          <h5>MUST PASS A BOARD-CERTIFIED EXAM</h5>
        </Col>
      </Card.Body>
    </Card>
);

export default Statistics;
