
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React, { useEffect, useState } from "react";
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
          <h2 className="mt-2">My Spaces</h2>
          <hr />
          <Row className="justify-content-center">
            {edificios.length > 0 ? (
              edificios.map((edificio) => (
                <Col key={edificio.id} sm={6} md={4} lg={3} className="mb-3">
                  <Edificio edificio={edificio} />
                </Col>
              ))
            ) : (
              <p>Cargando espacios...</p>
            )}
          </Row>
        </div>
      );
    }
