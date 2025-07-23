import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Button from 'react-bootstrap/Button';

function Counter({ item }) {
    const [counter, setCounter] = useState(1);
    const { addToCart } = useContext(CartContext);

    const handleAdd = () => setCounter(counter + 1);
    const handleSub = () => {
        if (counter > 1) setCounter(counter - 1);
    };

    const handleAddToCart = () => {
        addToCart(item, counter);
    };

    return (
        <div className='d-flex m-3 w-100 gap-3 align-items-center justify-content-center'>
            <Button variant='outline-dark' onClick={handleSub}>-</Button>
                <p className='m-0'>{counter}</p>
            <Button variant='outline-dark' onClick={handleAdd}>+</Button>
            <Button variant='outline-dark' onClick={handleAddToCart}>
                Agregar al carrito
            </Button>
        </div>
    );
}

export default Counter;
