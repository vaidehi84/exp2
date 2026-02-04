import { Card, Row, Col } from "react-bootstrap";

export default function DashboardCardBootstrap() {
  return (
    <Row className="mt-3">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>University</Card.Title>
            <Card.Text>Chandigarh University</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Specialization</Card.Title>
            <Card.Text>AI & ML</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Card>
          <Card.Body>
            <Card.Title>Preparation</Card.Title>
            <Card.Text>Placements 2026</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

