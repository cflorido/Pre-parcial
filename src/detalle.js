import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { useIntl } from "react-intl";

export default function Detalle() {
    const { edificioId } = useParams();
    const [edificios, setEdificios] = useState([]);
    const intl = useIntl(); 

    const getImageForType = (type) => {
        const images = {
            "Living room": "https://img.freepik.com/vector-gratis/sofa-dos-plazas-beige-aislado-sobre-fondo-blanco_1308-66499.jpg",
            "Kitchen": "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-kitchen-cabinet-image_2239073.jpg",
            "Dinner room": "https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-kitchen-cabinet-image_2239073.jpg",
        };
        return images[type] || "https://via.placeholder.com/100";
    };

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
            .then((res) => res.json())
            .then((data) => {
                const foundBuildings = data.filter((m) => m.homeId === edificioId);
                setEdificios(foundBuildings);
            });
    }, [edificioId]);

    if (edificios.length === 0) {
        return <h2>{intl.formatMessage({ id: "detalle.loading" })}</h2>;
    }

    return (
        <div>
            <h2 style={{ textAlign: "left", fontSize: "24px" }}>
                {intl.formatMessage({ id: "detalle.myRooms" })}
            </h2>

            <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
                <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                        {edificios.map((edificio, index) => (
                            <Card key={index} style={{ width: "12rem", textAlign: "center", padding: "10px" }}>
                                <Card.Body>
                                    <Card.Text>{edificio.name}</Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={getImageForType(edificio.name)} style={{ height: "80px" }} />
                            </Card>
                        ))}
                    </div>
                </div>

                <div style={{ flex: 1 }}>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>{intl.formatMessage({ id: "detalle.device" })}</th>
                                <th>{intl.formatMessage({ id: "detalle.value" })}</th>
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
        </div>
    );
}
