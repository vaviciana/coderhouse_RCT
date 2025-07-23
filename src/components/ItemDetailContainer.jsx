import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const { itemId } = useParams();

    useEffect(() => {
        getProductoById(itemId).then((data) => setProducto(data));
    }, [itemId]);

    return (
        <div className="container mt-4">
        {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
        </div>
    );
}

export default ItemDetailContainer;

