import { useState } from 'react';
import { useCart } from '../context/useCart';

function Checkout() {
    const { cart, totalPrice, clearCart } = useCart();

    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const [orderId, setOrderId] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre, email, telefono } = formData;

        if (!nombre || !email || !telefono) {
        alert('Por favor completá todos los campos');
        return;
        }

        const orden = {
        cliente: formData,
        items: cart,
        total: totalPrice,
        fecha: new Date().toLocaleString()
        };

        const timestamp = Date.now();
        console.log('Orden generada:', orden);
        console.log('ID generado (timestamp):', timestamp);

        clearCart();
        setOrderId(timestamp);
    };

    if (orderId) {
        return (
        <div className="container mt-5 text-center">
            <h2>¡Gracias por tu compra!</h2>
            <p>Tu número de orden es:</p>
            <code>{orderId}</code>
        </div>
        );
    }

    return (
        <div className="container mt-4">
        <h2>Finalizar compra</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label>Nombre</label>
            <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="form-control"
                required
            />
            </div>

            <div className="mb-3">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
            />
            </div>

            <div className="mb-3">
            <label>Teléfono</label>
            <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="form-control"
                required
            />
            </div>

            <button className="btn btn-success" type="submit">
            Confirmar compra
            </button>
        </form>
        </div>
    );
}

export default Checkout;
