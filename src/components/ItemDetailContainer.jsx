import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${itemId}`)
        .then((res) => res.json())
        .then((data) => setProducto(data))
        .catch((error) => console.error("Error al cargar el producto", error));
    }, [itemId]);

    if (!producto) {
        return <p className="text-center">Cargando detalle...</p>;
    }

    return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
