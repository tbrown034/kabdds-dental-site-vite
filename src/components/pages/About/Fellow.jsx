import { Icon } from "semantic-ui-react";
import Stats from "./AboutStats";
import AGD from "../../../assets/images/AGD.png"
import { Row, Col, Container, Image } from "react-bootstrap";

const Fellow = () => (
  <div className="defaultPadding quadColor">
    <Container fluid>
      <Row>
        <Col lg="9">
          <h1 className="center-text">Did You Know?</h1>
          <p>
            Dr. Brown is one of just six percent of U.S. dentists who have
            earned the prestigous Fellow of the Academy of General Dentistry
            designation.
          </p>
          <p>
            We think that's pretty cool, but don't take our word for it. Here is
            what the Academy of General Dentistry has to say about that:
          </p>
          <div className="quote-card">
            <p className="quote-text">
              <Icon name="quote left" />
              If your dentist is a Fellow or Master of the Academy of General
              Dentistry (FAGD or MAGD), they are the best of the best in the
              field. You can rest assured that your dentist cares about knowing
              the latest techniques and best practices in dentistry. Your
              dentist practices these techniques in a classroom setting multiple
              times a year — not every dentist does this.
              <Icon name="quote right" />
            </p>
            <div className="logo-container">
              <Image fluid="md" className="logoQuote" src={AGD} />
            </div>
          </div>
        </Col>
        <Col>
          <Stats />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Fellow;
