import { Container, Row, Col } from "react-bootstrap";
import Map from "../../general/Map"
import { Button, Icon } from "semantic-ui-react";
import CopyAddress from "../../buttons/CopyAddress";

const myAddress = "1296 Rickert Drive, Suite 300, Naperville, IL 60540";

const MapPackage = () => {
  return (

      <div className="default-padding ">
        <Container fluid>
          <Row>
            <Col xl="8">
              <Map  />
            </Col>
            <Col className="textBox">
              <h1>
              Located in the Heart of Napeville, IL.
              </h1>
              <p>
                We are located on the third floor of the Fifth Third Bank,
                located at <span className="address">{myAddress}</span>, for the
                past 30 years. Come visit us!{" "}
              </p>
              <div className="btnGroup">
                <Button animated>
                  <Button.Content visible>
                    <Icon name="world" /> Get Directions
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="car" />
                  </Button.Content>
                </Button>
                <CopyAddress address={myAddress} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

  );
};

export default MapPackage;
