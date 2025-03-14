
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
import Edificio from "./edificio"
import Row from "react-bootstrap/Row";
export default function Componentes() {
    const [edificios, setcasas] = useState([]);
 
    useEffect(() => {
        const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setcasas(data);
          });
      }, []);
      

    return (
        <div className="container">
        <h2 style={{ textAlign: "left", fontSize: "24px" }}>My Spaces</h2>

        <hr></hr>
        <Row className="justify-content-center">
          {edificios.map((edificio) => (
            <Col key={edificio.id} md={4} className="mb-3">
              <Edificio edificio={edificio} />
            </Col>
          ))}
        </Row>
      </div>

    );
}
