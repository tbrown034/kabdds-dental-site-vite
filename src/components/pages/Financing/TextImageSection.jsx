import { Row, Col, Container, Image } from "react-bootstrap";
import family from "../../../assets/images/dad2.jpg"

const TextImageSection = () => {
  return (
    <div  className="default-padding tertiary-bg-color">
      <Container fluid>
        <Row>
          <Col className="textBox default-padding" xl="6">
            <h1>Outside the Office</h1>
            <p>
              When Dr. Brown is not helping his patients, he loves spending time
              with much of time with his family, including his two children and
              three granchldren. In addition to landscaping, he is also an avid
              fisherman and a faithful Bears and Cubs fan.{" "}
            </p>
          </Col>
          <Col className="rightImageContainer">
            <Image fluid="md" className="rightImage" src={family} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextImageSection;