import { Form, Button } from "react-bootstrap";

export default function ContactFormBootstrap() {
  return (
    <Form className="mt-4" style={{ maxWidth: "400px" }}>
      <h3>Student Feedback</h3>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Vaidehi Sharma" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="success">Submit</Button>
    </Form>
  );
}
