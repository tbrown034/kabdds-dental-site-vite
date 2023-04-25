import { Row, Col, Container, Image } from "react-bootstrap";
import photo from "../../../assets/images/smile3.webp"
import ReviewCarousel from "./ReviewCarousel";

const TextImageSection = () => {
  return (
    <div className="secondary-bg-color" >
      <Container fluid>
        <Row>
          <Col className= "default-padding" xl="8">
           <ReviewCarousel />
          </Col>
          <Col className="homeImageContainer">
            <Image fluid="md" className="homeImage" src={photo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextImageSection;