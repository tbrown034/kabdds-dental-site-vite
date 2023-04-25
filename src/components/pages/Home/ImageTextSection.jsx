import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import dentist from "../../../assets/images/Keith2.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

const ImageTextSection = () => (
  <div className="default-padding tertiary-bg-color">
    <Container fluid>
      <Row>
        <Col className="leftImageContainer default padding" lg="3" >
          <Image className="leftImage" fluid="lg" src={dentist} />
        </Col>
        <Col className="textBox default-padding">
            <div className="center-text">
          <h1 >Experience You Can Trust</h1>
          <FontAwesomeIcon
            icon={faTooth}
            size="8x"
            className="icon fa-bounce bounceIcon"
            style={{
              animationDuration: "2s",
              animationIterationCount: "1",
            }}
          />
          </div>
          <p>
            Keith A. Brown DDS FAGD is an experienced dentist with over 42 years
            of experience in the field. Since 1980, he has been providing
            top-notch dental care to patients of all ages. Dr. Brown's passion
            for dentistry is driven by his commitment to staying current with
            the latest techniques and technology.
          </p>
          <p>
            Dr. Brown earned his Doctor of Dental Surgery degree from Loyola
            Dental School. Prior to that, he earned Bachelor of Arts degrees in
            Chemistry and Biology from North Central College. A lifelong
            Chicagoland residnet, Dr. Brown attended Naperville Central High
            School and Fenger High School in the Southside of Chicago.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default ImageTextSection;
