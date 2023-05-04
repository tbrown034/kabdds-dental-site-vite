import Stats from "./AboutStats";
import DYK from "./AboutDYK";
import { Row, Col, Container } from "react-bootstrap";

const Fellow = () => {
  return (
    <div className="default-padding tertiary-bg-color">
      <Container fluid>
        <Row >
          <Col lg="9">
            <DYK />
          </Col>
          <Col >
            <Stats />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Fellow;
