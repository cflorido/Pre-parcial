import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
export default function Edificio({ edificio }) {
    const getImageForType = (type) => {
        const images = {
          house: "https://cdn-icons-png.flaticon.com/512/3947/3947466.png",
          loft: "https://cdn-icons-png.flaticon.com/512/2521/2521520.png",
        };
        return images[type] || "https://via.placeholder.com/100"; // Imagen por defecto
      };
    return (
        <Card
          style={{
            width: "25rem", // Hacerla más cuadrada
            height: "25rem", // Hacerla más cuadrada
            margin: "1px", // Reducir el espacio entre tarjetas
            textAlign: "center",
            borderRadius: "12px", // Bordes redondeados
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Sombra difusa
            transition: "0.3s",
          }}
        >
          <Card.Body>
          <Card.Img
    variant="top"
    src={getImageForType(edificio.type)}
    style={{
      width: "50%",
      height: "auto",
      margin: "15px auto 10px auto",
    }}
  />
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