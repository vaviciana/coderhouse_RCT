function ItemDetail({ producto }) {
    return (
        <div className="container mt-4">
        <div className="card">
            <div className="row g-0">
            <div className="col-md-5">
                <img
                src={producto.thumbnail}
                alt={producto.title}
                className="img-fluid rounded-start"
                />
            </div>
            <div className="col-md-7">
                <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">
                    <strong>Precio:</strong> ${producto.price}
                </p>
                <p className="card-text">
                    <small className="text-muted">Stock: {producto.stock}</small>
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default ItemDetail;
