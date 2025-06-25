import CartWidget from '../components/CartWidget'
import Logo from '../assets/Logo.png';
import { Link } from "react-router-dom";


function Navbar () {
    return (
        <div className='navbar'>
            <div className='d-flex flex-row'>
                <a href="">
                    <img src={Logo} alt="Logo_EMETEMKT" style={{ width: '80px' }}/>
                </a>
                <div className='d-flex flex-row text-center justify-content-center align-items-center items_menu'>
                    <Link to="/category/mens-shirts">
                        Camisetas
                    </Link>
                    <Link to="/category/mens-shoes">
                        Zapatos
                    </Link>
                    <Link to="/category/mens-watches">
                        Relojes
                    </Link>
                    <Link to="/category/mobile-accessories">
                        Accesorios para Móviles
                    </Link>
                </div>
            </div>
            <CartWidget></CartWidget>
        </div>
)}

export default Navbar