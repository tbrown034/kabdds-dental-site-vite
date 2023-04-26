import { Container } from "react-bootstrap";
import { Button, Checkbox, Form } from "semantic-ui-react";

const ContactForm = () => {
  return (
    <div className="default-padding  tertiaryColor">
      <Container fluid>
        <h1>Contact</h1>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder="First and Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input placeholder="Phone Number" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Phone Number" />
          </Form.Field>
          <Form.Field>
            <label>How Can We Help You?</label>
            <input placeholder="Let us know any questions/concerns/issues you have!" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
