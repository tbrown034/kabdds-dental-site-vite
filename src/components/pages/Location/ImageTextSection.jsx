import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import dentist from "../../../assets/images/bank2.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

const ImageTextSection = () => (
  <div className="default-padding tertiary-bg-color">
    <Container fluid>
      <Row>
        <Col className="leftImageContainer default padding" lg="7" >
          <Image className="leftImage" fluid="lg" src={dentist} />
        </Col>
        <Col className="textBox default-padding">
            <div className="center-text">
          <h1 >Naperville's Trusted Dentist</h1>
          <FontAwesomeIcon
            icon={faLocationDot}
            size="8x"
            className="icon fa-bounce bounceIcon"
            style={{
              animationDuration: "2s",
              animationIterationCount: "1",
            }}
          />
          </div>
          <p>
          Since 1994, Dr. Brown has been proudly serving the Naperville
            community from his conveniently located practice at the Fifth Third
            Bank building, at the intersection of 75th Street and Ricket Drive.
          </p>
          
        </Col>
      </Row>
    </Container>
  </div>
);

export default ImageTextSection;
