import { Container, Row, Col } from "react-bootstrap";
import Map from "../../general/Map"
import { Button, Icon } from "semantic-ui-react";
import CopyAddress from "../../buttons/CopyAddress";
import { Link } from "react-router-dom";


const myAddress = "1296 Rickert Drive, Suite 300, Naperville, IL 60540";

const MapPackage = () => {
  return (

      <div className="default-padding tertiary-bg-color ">
        <Container fluid>
          <Row>
            <Col className="leftImageContainer" xl="8">
              <Map className="leftImage" />
            </Col>
            <Col className="textBox mobile-bottom-padding">
              <h1>
              Located in the Heart of Napeville, IL.
              </h1>
              <p>
                We are located on the third floor of the Fifth Third Bank,
                located at <span className="address">{myAddress}</span>, for the
                past 30 years. Come visit us!{" "}
              </p>
              <div className="btnGroup center-text">
                <Button animated>
                  <Button.Content visible>
                    <Icon name="world" /> Get Directions
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="car" />
                  </Button.Content>
                </Button>
                <CopyAddress address={myAddress} />
                <Link to="/location">
                <Button animated>
                  <Button.Content visible>
                    <Icon name="building" />About our Location
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

  );
};

export default MapPackage;
