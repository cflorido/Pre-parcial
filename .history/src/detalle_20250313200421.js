import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detalle() {
    const { edificioId } = useParams();
    const [edificio, setEdificio] = useState(null);

    useEffect(() => {
        // Cargar la lista de mascotas
        fetch("https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json")
          .then((res) => res.json())
          .then((data) => {
            // Buscar la mascota por su ID
            const found = data.find((m) => m.homeId.toString() === edificioId);
            setEdificio(found);
          });
        }, [edificioId]);
      if (!edificio) {
        return <h2>Cargando...</h2>; // 👈 Evita errores si `edificio` es null
    }
      return (
        <div>
          <h1>{Edificio.name}</h1>

        </div>
      );
}