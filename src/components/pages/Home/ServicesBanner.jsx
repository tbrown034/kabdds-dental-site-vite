import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import brush from "../../../assets/images/toothbrush.jpeg";
import { Reveal } from "semantic-ui-react";
import invialign from "../../../assets/images/invisalign.jpeg"
import chair from "../../../assets/images/officechair.jpeg"

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ServicesBanner() {
  return (
    <div className="default-padding primary-bg-color">
     <h1 className="center-text">A Full Service Dentist Office</h1>
      <h2 className="bottom-padding">
        We provide a range of dental services to take the best care of you and
        your family's dental health for life. Whether it's your child's first cleaning or an emergnecy procedure, we got you covered.
      </h2>
      <CardGroup>
        <Row xl={3} md={3} sm={1} xs={"auto"} className="g-4">
          <Col>
            <Card>
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Card.Img variant="top" className="cardPhoto" src={brush} />
                  <Card.ImgOverlay className="cardOverlay">
                    <Card.Title className="serviceTitle">
                      General Dentristry
                    </Card.Title>
                  </Card.ImgOverlay>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Img
                    variant="top"
                    className="backCardPhoto"
                    src={brush}
                  />
                  <Card.ImgOverlay id="serviceLinkHoldr">
                    <a href="/Location">Check-Ups</a>
                    <a href="/Location">Fillings</a>
                    <a href="/Location">Emergency</a>
                    <a href="/Location">Root Canals</a>
                    <a href="/Location">Childrens' Dentristry</a>
                    <a href="/Location">More</a>
                  </Card.ImgOverlay>
                </Reveal.Content>
              </Reveal>
            </Card>
          </Col>
          <Col>
            <Card id="cardBackground" className="servicesCard">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Card.Img
                    className="cardPhoto"
                    variant="top"
                    src={invialign}
                  />
                  <Card.ImgOverlay>
                    <Card.Title  className="serviceTitle">
                      Cosmetic Dentristry
                    </Card.Title>
                  </Card.ImgOverlay>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Img
                    className="backCardPhoto"
                    variant="top"
                    src={invialign}
                  />
                  <Card.ImgOverlay id="serviceLinkHoldr">
                    <a href="/Services">Invislaign</a>
                    <a href="/Location">Veeners </a>
                    <a href="/Location">Teeth Whitening</a>
                    <a href="/Location">Bonding</a>
                    <a href="/Location">Emergency</a>
                    <a href="/Location">More</a>
                  </Card.ImgOverlay>
                </Reveal.Content>
              </Reveal>
            </Card>
          </Col>
          <Col>
            <Card id="cardBackground" className="servicesCard">
              <Reveal animated="move up">
                <Reveal.Content visible>
                  <Card.Img className="cardPhoto" variant="top" src={chair} />
                  <Card.ImgOverlay>
                    <Card.Title  className="serviceTitle">
                      Surgical Dentristry
                    </Card.Title>
                  </Card.ImgOverlay>
                </Reveal.Content>
                <Reveal.Content hidden>
                  <Card.Img
                    className="backCardPhoto"
                    variant="top"
                    src={chair}
                  />
                  <Card.ImgOverlay id="serviceLinkHoldr">
                    <a href="/Location">Extractions</a>
                    <a href="/Location">Implants</a>
                    <a href="/Location">Bridges</a>
                    <a href="/Location">Dentures</a>
                    <a href="/Location">More</a>
                  </Card.ImgOverlay>
                </Reveal.Content>
              </Reveal>
            </Card>
          </Col>
        </Row>
      </CardGroup>
    </div>
  );
}

export default ServicesBanner;
