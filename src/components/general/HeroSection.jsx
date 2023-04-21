import React from "react";
import { Card } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import CallButton from "../buttons/CallButton";
import { Link } from "react-router-dom";

const HeroSection = ({
  backgroundImage,
  altImage,
  title,
  subtitle,
  showButtons,
  showTopText, topText
}) => {
  return (
    <div className="quad-bg-color">
      <Card className="quad-bg-color">
        <Card.Img src={backgroundImage} alt={altImage} />
        <Card.ImgOverlay className="heroOverlay">
          {showTopText && (
            <div>
              <Card.Text className="heroTopText primary-color">{topText}</Card.Text>{" "}
            </div>
          )}

          <Card.Title className="heroTitle primary-color">{title}</Card.Title>
          <Card.Text className="heroText primary-color">{subtitle}</Card.Text>
          {showButtons && (
            <div className="btnGroup">
              <Link to="/appointment">
                <Button animated>
                  <Button.Content visible>
                    <Icon name="calendar" /> Make an Appointment
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Link>
              <CallButton />
            </div>
          )}
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default HeroSection;
