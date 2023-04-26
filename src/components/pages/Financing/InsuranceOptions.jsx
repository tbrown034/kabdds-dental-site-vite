
import citi from "../../../assets/images/citi_logo.png"

import care from "../../../assets/images/care.png"

import { Button, Icon } from "semantic-ui-react";
import { Row, Col, Container, Image } from "react-bootstrap";

const FinanceInsure = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="default-padding tertiary-bg-color">
      <Container fluid>
        <Row >
          <h1 className="center-text">No Insurance, No Problem</h1>
          <p>
            Whether you don't have dental insurance or your plan doesn't cover
            certain procedures, we are ready to help and advise you on a variety
            of financial services. Each service offers No Interest or Low
            Interest financing and low minimum monthly payment options, so you
            can get the treatment you want, when you want it. Our Financial
            Coordinator can walk you through the application process for{" "}
            <a href="https://www.carecredit.com/">Care Credit</a> or{" "}
            <a href="https://www.citibenefits.com/">Citi Benefits </a> Health
            financing options. See more details below.
          </p>
        </Row>
        <Row className="default-padding ">
          <Col lg="6" className="quad-bg-color right-margin default-padding">
            <Image
              fluid="md"
              src={care}
            />
            <p>
              Whether you use your healthcare credit card to pay for
              deductibles, or for treatments and procedures not covered by
              insurance*, CareCredit helps make the health, wellness and beauty
              treatments and procedures you want possible today.
            </p>
            <p className="disclaimer center-text">*Subject to Credit Approval</p>
            <Button
              animated
              onClick={() => openLink("https://www.carecredit.com/")}
            >
              <Button.Content visible>More Info</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Col>
          <Col className="quad-bg-color left-margin default-padding">
            <Image
              fluid="md"
              src={citi}
            />
            <p>
              Your needs are unique to you, so Citi provides you with different
              medical options from which to choose. Each plan offers
              comprehensive benefits to help you and your family stay healthy
              throughout the year.
            </p>
            <Button animated className="soloButton">
              <Button.Content visible>More Info</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FinanceInsure;
