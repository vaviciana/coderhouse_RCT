import CartWidget from '../components/CartWidget'
import Logo from '../assets/Logo.png';

function Navbar () {
    return (
        <div className='navbar'>
            <div className='d-flex flex-row'>
                <a href="">
                    <img src={Logo} alt="Logo_EMETEMKT" style={{ width: '80px' }}/>
                </a>
                <div className='d-flex flex-row text-center justify-content-center align-items-center items_menu'>
                    <a href="">
                        Gestión de Redes
                    </a>
                    <a href="">
                        Diseño Web
                    </a>
                    <a href="">
                        Ad Management
                    </a>
                    <a href="">
                        Brand Management
                    </a>
                </div>
            </div>
            <CartWidget></CartWidget>
        </div>
)}

export default Navbar