import cartIcon from '../assets/carrito-de-compras.png';
import { useContext } from "react";
import { CartContext } from "../context/CartContext"; 
import { useNavigate } from 'react-router-dom';


function CartWidget() {

    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const navigate = useNavigate()

    return (
            <button className='btn d-flex align-items-center justify-content-center' onClick={() => navigate('/cart')}>
                <h2>{totalItems}</h2>
                <img src={cartIcon} alt="Cart Widget" style={{ width: '40px' }}/>
            </button>
)}

export default CartWidget;
