import { Icon } from "semantic-ui-react";
import Stats from "./AboutStats";
import AGD from "../../../assets/images/AGD.png"
import { Row, Col, Container, Image } from "react-bootstrap";





const Fellow = () => (
  <div className="default-padding primary-bg-color">
    <Container fluid>
      <Row>
        <Col lg="8">
          <h1 className="center-text">Did You Know?</h1>
          <p className="center-text">
            Dr. Brown is one of just six percent of U.S. dentists who have
            earned the prestigous Fellow of the Academy of General Dentistry
            designation.
            We think that's pretty cool, but don't take our word for it. Here is
            what the Academy of General Dentistry has to say about that:
          </p>
          <div className="default-padding secondary-bg-color center-text round-box">
            <p className="primary-color">
              <Icon name="quote left" size="big" className="left-quote" />
              If your dentist is a Fellow or Master of the Academy of General
              Dentistry (FAGD or MAGD), they are the best of the best in the
              field. You can rest assured that your dentist cares about knowing
              the latest techniques and best practices in dentistry. Your
              dentist practices these techniques in a classroom setting multiple
              times a year — not every dentist does this.
              <Icon name="quote right" size="big" className="right-quote" />
            </p>
            <span className="long-hyphen-container">
          <span className="long-hyphen"></span>
        </span>

              <Image fluid="md" className="logo-quote default-padding" src={AGD} />
            </div>
       
        </Col>
        <Col className="statsColumn">
          <Stats className="statsHolder" />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Fellow;
