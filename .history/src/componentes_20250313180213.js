import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
const { useEffect, useState } = require("react");
import Edificio from "./edificio"

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
        <h2 className="mt-2">Listado de mascotas</h2>
        <hr></hr>
        <Col>
          {edificios.map((edificio) => (
            <Col key={edificio.id}>
              <Edificio edificio={edificio} />
            </Col>
          ))}
        </Col>
      </div>

    );
}
