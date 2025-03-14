import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";

export default function Edificio({ edificio }) {
  return (
    <Card
      style={{
        width: "12rem", // Tamaño cuadrado
        height: "12rem",
        margin: "5px", // Espacio entre tarjetas
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "10px", // Bordes más suaves
        boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.15)", // Sombra suave
        transition: "transform 0.2s ease-in-out",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"} 
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1.0)"}
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
