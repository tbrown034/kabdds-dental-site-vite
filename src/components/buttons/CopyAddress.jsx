import { Button, Icon } from "semantic-ui-react";

const CopyAddress = ({ address, className }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
  };

  return (
    <Button  onClick={handleCopy} animated>
      <Button.Content visible>
        <Icon name="copy" />
        Copy Address
      </Button.Content>
      <Button.Content hidden>
        <Icon name="copy" />
      </Button.Content>
    </Button>
  );
};

export default CopyAddress;
