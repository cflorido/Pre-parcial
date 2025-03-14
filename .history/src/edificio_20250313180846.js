import Card from "react-bootstrap/Card";

export default function Edificio({ edificio }) {
  return (
    <Card className="shadow-sm text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={edificio.image} alt={edificio.name} />
      <Card.Body>
        <Card.Title>{edificio.name || "Sin Nombre"}</Card.Title>
        <Card.Text>{edificio.address || "Sin Dirección"}</Card.Text>
      </Card.Body>
    </Card>
  );
}
