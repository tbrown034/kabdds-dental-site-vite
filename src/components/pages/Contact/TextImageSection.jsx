import { Row, Col, Container, Image } from "react-bootstrap";
import photo from "../../../assets/images/smile.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

const TextImageSection = () => {
  return (
    <div  className="default-padding tertiary-bg-color">
      <Container fluid>
        <Row>
        <Col className="textBox default-padding">
            <div className="center-text">
          <h1>Get in Contact</h1>
          <FontAwesomeIcon
            icon={faMessage}
            size="8x"
            className="icon fa-bounce bounceIcon"
            style={{
              animationDuration: "2s",
              animationIterationCount: "1",
            }}
          />
          </div>
          <p>
            Keith A. Brown DDS FAGD understands that going to the dentist can sometimes be a confusing, or even scary, process. 
          </p>
          <p>
            That's why we are dedicated to answer all your questions before, during and after your visit. Feel free to get in touch with us below and we'll get back to you as soon as possible!
          </p>
        </Col>
          <Col className="rightImageContainer">
            <Image fluid="md" className="rightImage" src={photo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextImageSection;