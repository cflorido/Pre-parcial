import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Edificio(props){
    return(
        <Card style={{ width: "18rem" }}>
        <Card.Body className="mb-3">
          <Card.Title>{props.edificio.name}</Card.Title>
          <Card.Text>{props.edificio.address}</Card.Text>
        </Card.Body>
      </Card>        
    )
}