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
                    <Link to="/category/gestion-de-redes">
                        Gestión de redes
                    </Link>
                    <Link to="/category/diseño-web">
                        Diseño web
                    </Link>
                    <Link to="/category/ad-management">
                        Ad management
                    </Link>
                    <Link to="/category/branding">
                        Branding
                    </Link>
                </div>
            </div>
            <CartWidget></CartWidget>
        </div>
)}

export default Navbar