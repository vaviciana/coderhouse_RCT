import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
    const [cart, setCart] = useState ([])

//AGREGAR
    const addToCart = (item, quantity) => {
    const exists = cart.find(prod => prod.id === item.id);
    if (exists) {
        const updatedCart = cart.map(prod =>
            prod.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        );
        setCart(updatedCart);
        } else {
        setCart([...cart, { ...item, quantity }]);
        }
    };
// Eliminar producto
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

  // Vaciar carrito
    const clearCart = () => {
        setCart([]);
    };

  // Totales
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

        return (
            <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}
            >
            {children}
            </CartContext.Provider>
        );
    }

export default CartProvider;