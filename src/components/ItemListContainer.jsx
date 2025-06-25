import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

function ItemListContainer({ titulo }) {
    const { categoryName } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const url = categoryName
        ? `https://dummyjson.com/products/category/${categoryName}`
        : 'https://dummyjson.com/products';

        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const items = data.products || data;
            setProductos(items);
        })
        .catch((error) => console.error("Error al cargar productos", error));
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

