import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap"; // Asegúrate de importar los estilos

export default function Detalle() {
    const { edificioId } = useParams(); 
    const [edificios, setEdificios] = useState([]); // Ahora es un array

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
          .then((res) => res.json())
          .then((data) => {
            console.log("EdificioId recibido:", edificioId); 
            console.log("Lista de edificios:", data); 
    
            const foundBuildings = data.filter((m) => m.homeId === edificioId); // Encuentra todos los que coincidan

            console.log("Edificios encontrados:", foundBuildings); 
            
            setEdificios(foundBuildings);
          });
    }, [edificioId]);

    if (edificios.length === 0) {
        return <h2>Cargando...</h2>; 
    }

    return (
        <div>
          <h1>Detalles de los edificios</h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {edificios.map((edificio, index) => (
              <Card key={index} style={{ width: "18rem", padding: "10px" }}>
                <Card.Body>
                  <Card.Title>{edificio.name || "Sin Nombre"}</Card.Title>
                  <Card.Text>
                    <strong>Dirección:</strong> {edificio.address || "Sin Dirección"}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
    );
}
