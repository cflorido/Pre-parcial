import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
export default function Edificio({ edificio }) {
  return (
    <Card style={{ width: "15 rem", marginBottom: "1px" }}>
      <Card.Body className="mb-3">
        <Card.Title>{edificio.name || "Sin Nombre"}</Card.Title>
        <Card.Text>{edificio.address || "Sin Dirección"}</Card.Text>
      </Card.Body>
    </Card>
  );
}