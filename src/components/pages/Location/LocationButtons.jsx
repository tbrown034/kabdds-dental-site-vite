import { Button, Icon } from "semantic-ui-react";
import CopyAddress from "../../buttons/CopyAddress";
import DirectionButton from "../../buttons/DirectionButton";

const myAddress = "1296 Rickert Drive, Suite 300, Naperville, IL 60540";

const LocationButtons = () => {
  return (
    <div className="default-padding center-text tertiary-bg-color locationGroup">
     <DirectionButton />
      <CopyAddress address={myAddress} />
    </div>
  );
};

export default LocationButtons;
