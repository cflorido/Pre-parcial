import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap"; // Usa Bootstrap para mejor diseño

export default function Detalle() {
    const { edificioId } = useParams();
    const [edificios, setEdificios] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
          .then((res) => res.json())
          .then((data) => {
              const foundBuildings = data.filter((m) => m.homeId === edificioId);
              setEdificios(foundBuildings);
          });
    }, [edificioId]);

    if (edificios.length === 0) {
        return <h2>Cargando...</h2>;
    }

    return (
        <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
            {/* Columna de Tarjetas */}
            <div style={{ flex: 1 }}>
                <h2>My rooms</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                    {edificios.map((edificio, index) => (
                        <Card key={index} style={{ width: "12rem", textAlign: "center", padding: "10px" }}>
                            <Card.Img variant="top" src="/room-icon.png" style={{ height: "80px" }} />
                            <Card.Body>
                                <Card.Title>{edificio.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Columna de Tabla */}
            <div style={{ flex: 1 }}>
                <h2>Devices</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Device</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {edificios.flatMap((edificio, i) =>
                            edificio.devices.map((device, j) => (
                                <tr key={`${i}-${j}`}>
                                    <td>{j + 1}</td>
                                    <td>{device.id}</td>
                                    <td>{device.name}</td>
                                    <td>{device.desired?.value || "N/A"}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>

                        {/* Columna de Tabla */}
                        <div style={{ flex: 1 }}>
                <h2>Devices</h2>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Device</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {edificios.flatMap((edificio, i) =>
                            edificio.devices.map((device, j) => (
                                <tr key={`${i}-${j}`}>
                                    <td>{j + 1}</td>
                                    <td>{device.id}</td>
                                    <td>{device.name}</td>
                                    <td>{device.desired?.value || "N/A"}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </div>
            
        </div>
    );
}
