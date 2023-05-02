import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import CopyPhoneButton from './CopyPhoneButton';

const CallButton = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const callClick = () => {
   
        window.location.href = ("5553010589");
    
  };

  return (
    <>
      <Button animated onClick={handleShow} className="myButton">
              <Button.Content visible>
                <Icon name="phone" /> 
                <span className="call-text">Call us Now</span> {/* Add the call-text class */}

              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ready to Call?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Press Call below or give us a ring at (630) 555-5555!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={callClick} animated="vertical">
        <Button.Content hidden><Icon name="phone" /></Button.Content>
        <Button.Content visible>Call Now!
          
        </Button.Content>
      </Button>
      <CopyPhoneButton/>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CallButton;