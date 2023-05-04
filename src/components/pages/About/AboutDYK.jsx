import {Card, Container} from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import AGD from "../../../assets/images/AGD.png";

const AboutDYK = () => {
  return (
    <Container fluid>
      <h1 className="center-text">Did You Know?</h1>
      <p className="center-text">
        Dr. Brown is one of just six percent of U.S. dentists who have earned
        the prestigous Fellow of the Academy of General Dentistry designation.
        We think that's pretty cool, but don't take our word for it. Here is
        what the Academy of General Dentistry has to say about that:
      </p>
      <Card className="default-padding secondary-bg-color center-text round-box">
        <Card.Body className="primary-color">
          <h2>
            {" "}
            <Icon name="quote left" size="big" className="left-quote" />
            If your dentist is a Fellow or Master of the Academy of General
            Dentistry (FAGD or MAGD), they are the best of the best in the
            field. You can rest assured that your dentist cares about knowing
            the latest techniques and best practices in dentistry. Your dentist
            practices these techniques in a classroom setting multiple times a
            year — not every dentist does this.
            <Icon name="quote right" size="big" className="right-quote" />
          </h2>
        </Card.Body>
        <hr
          style={{ width: "50%", margin: "10px auto", color: "whitesmoke" }}
        />
        <h4 className="primary-color italics" style={{ marginBottom: "10px" }}>
          Source:
        </h4>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <Card.Img
            variant="bottom"
            className="logo-quote center-text"
            src={AGD}
          />
        </div>
      </Card>
    </Container>
  );
};

export default AboutDYK;
