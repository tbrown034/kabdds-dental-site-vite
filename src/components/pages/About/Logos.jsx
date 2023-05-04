import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import Loyola from "../../../assets/images/loyola.png"
import CDS from "../../../assets/images/cds1.png"
import NCC from "../../../assets/images/ncc3.webp"
import Fellow from "../../../assets/images/Fellow.png"
import AES from "../../../assets/images/AES1.png"
import ADA from "../../../assets/images/ada-logo1.svg"



const Logos = () => (
  <div className="myLogos secondary-bg-color">
    <Container fluid>
      <Row className="logoGroup">
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={Loyola} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={NCC} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={ADA} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={CDS} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={AES} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={Fellow} /></Col>
      </Row>
    </Container>
  </div>
);

export default Logos;