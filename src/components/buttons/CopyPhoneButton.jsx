import { Button, Icon } from "semantic-ui-react";

const CopyPhoneButton = () => {
  const phoneNumber = "555-630-0589"
  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
  };

  return (
    <Button  onClick={handleCopy} animated>
      <Button.Content visible>
       
        Copy Phone Number
      </Button.Content>
      <Button.Content hidden>
        <Icon name="copy" />
      </Button.Content>
    </Button>
  );
};

export default CopyPhoneButton;