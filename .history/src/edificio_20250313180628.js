import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

export default function Edificio({ edificio }) {
  return (
    <Card style={{ width: "18rem", marginBottom: "10px" }}>
      <Card.Body className="mb-3">
        <Card.Title>{edificio.name || "Sin Nombre"}</Card.Title>
        <Card.Text>{edificio.address || "Sin Dirección"}</Card.Text>
      </Card.Body>
    </Card>
  );
}