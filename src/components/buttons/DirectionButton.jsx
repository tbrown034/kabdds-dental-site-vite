import { Button, Icon } from "semantic-ui-react";

const DirectionButton = () => {
  return (
    <Button



      href="https://www.google.com/maps/place/Keith+A.+Brown,+DDS,+FAGD/@41.7482219,-88.1689447,17z/data=!3m1!4b1!4m6!3m5!1s0x880e57ffb6eb6c69:0xbc5292dc03318948!8m2!3d41.7482219!4d-88.166756!16s%2Fg%2F1tfq57bq"
      target="_blank"
      className="direction-button"

      animated
    >
      <Button.Content visible>
        <Icon name="world" /> Get Directions
      </Button.Content>
      <Button.Content hidden>
        <Icon name="car" />
      </Button.Content>
    </Button>
  );
};

export default DirectionButton;
