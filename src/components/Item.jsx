import { Link } from "react-router-dom";

function Item({ producto }) {
    return (
        <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img
            src={producto.thumbnail}
            className="card-img-top"
            alt={producto.title}
            style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{producto.title}</h5>
            <p className="card-text">${producto.price}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-primary mt-auto">
                Ver más
            </Link>
            </div>
        </div>
        </div>
    );
}

export default Item;
