import { Row, Col, Container, Image } from "react-bootstrap";
import photo from "../../../assets/images/Reception.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";

const TextImageSection = () => {
  return (
    <div  className="default-padding tertiary-bg-color">
      <Container fluid>
        <Row>
          <Col className="textBox  default-padding" xl="6">
            <h1 className="center-text">Financing Made Easy</h1>
            <FontAwesomeIcon
              icon={faPiggyBank}
              size="8x"
              className="center-text icon bounceIcon fa-bounce"
              style={{
                animationDuration: "2s",
                animationIterationCount: "1",
              }}
            />
                <p>
              We promise to give you the most affordable dental care we can
              offer. We can also assist you in arranging a financing program
              tailored to your specific needs and budget.
            </p>
            <p>
              We accept most traditional insurance plans, contact our office to
              verify acceptance of your plan. We also accept checks, cash or
              credit cards, and we offer a flexible payment plan. We, however,
              are not accepting Medicad at this time.
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