import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
export default function Edificio({ edificio }) {
    return (
        <Card
          style={{
            width: "33rem", // Hacerla más cuadrada
            height: "33rem", // Hacerla más cuadrada
            margin: "1px", // Reducir el espacio entre tarjetas
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "1rem", fontWeight: "bold" }}>
              {edificio.name || "Sin Nombre"}
            </Card.Title>
            <Card.Text style={{ fontSize: "0.9rem" }}>
              {edificio.address || "Sin Dirección"}
            </Card.Text>
          </Card.Body>
        </Card>
      );
}