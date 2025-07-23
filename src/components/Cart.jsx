import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from '../context/useCart'; 
import { useNavigate } from 'react-router-dom';

function Cart() {
    const { cart, removeFromCart } = useCart(); 
    const navigate = useNavigate();
    const total = cart.reduce((acumulador, producto) => {
            return acumulador + producto.quantity * producto.price;
            }, 0);
    const handleRemove = (id) => {
        removeFromCart(id);
    };

    if (cart.length === 0) {
        return(
        <h2>No tienes productos en el carrito</h2>
        )
    }

    return (
        <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='w-100'>
        {cart.map(producto => (
            <Card key={producto.id} className="m-3">
            <Card.Header as="h5">{producto.title}</Card.Header>
            <Card.Body>
                <Card.Title>Cantidad: {producto.quantity}</Card.Title>
                <Card.Text>{producto.description}</Card.Text>
                <Card.Title>Precio: {producto.price}</Card.Title>
                <Button onClick={() => handleRemove(producto.id)}>Quitar</Button>
            </Card.Body>
            </Card>
        ))}
        </div>
        <h2>Total de la compra: ${total}</h2>
        <button className='btn btn-success' onClick={() => navigate('/checkout')}>
            Proceder a la compra
        </button>

        </div>
    );
}

export default Cart;
