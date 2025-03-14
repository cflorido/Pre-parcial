import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detalle() {
    const { edificioId } = useParams(); // 👈 Asegúrate de que coincida con el nombre en la ruta
    const [edificio, setEdificio] = useState(null);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
          .then((res) => res.json())
          .then((data) => {
            console.log("EdificioId recibido:", edificioId);  // 👈 Para depuración
            console.log("Lista de edificios:", data); // 👈 Para ver los datos que llegan
    
            const found = data.find((m) => m.homeId === edificioId); 


            console.log("Edificio encontrado:", found); // 👈 Para verificar si se encontró
            
            setEdificio(found);
          });
    }, [edificioId]);
    

    if (!edificio) {
        return <h2>Cargando...</h2>; // 👈 Evita errores si `edificio` es null
    }

    return (
        <div>
          <h1>{edificio.name}</h1>
          <p>Dirección: {edificio.address}</p>
        </div>
    );
}
