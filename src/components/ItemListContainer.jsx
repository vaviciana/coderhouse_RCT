import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProductos } from "../firebase/db";

function ItemListContainer({ titulo }) {
    const { categoryName } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getProductos(categoryName).then(data => setProductos(data))
    }, [categoryName]);

    return (
    <div className="container mt-4">
        {titulo && <h2 className="text-center">{titulo}</h2>}
        {productos.length === 0 ? (
        <p className="text-center">Cargando productos...</p>
        ) : (
        <ItemList productos={productos} />
        )}
    </div>
    );
}

export default ItemListContainer;

