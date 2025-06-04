import cartIcon from '../assets/carrito-de-compras.png';

function CartWidget() {
    return (
                
                    <div className='d-flex flex-row gap-2 justify-content-end'>
                        <div className='burbuja' style={{ width: '20px' }}>
                            <p>3</p>
                        </div>
                        <a href="">
                            <img src={cartIcon} alt="Cart Widget" style={{ width: '40px' }}/>
                        </a>
                    </div>
                
)}

export default CartWidget;
