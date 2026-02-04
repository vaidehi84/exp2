import { Card, Button } from "react-bootstrap";

export default function ProductCardBootstrap() {
  return (
    <Card className="mt-3" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Women Safety ML Project</Card.Title>
        <Card.Text>
          Crime prediction using Machine Learning & Data Analysis.
        </Card.Text>
        <Button variant="primary">GitHub</Button>
      </Card.Body>
    </Card>
  );
}
