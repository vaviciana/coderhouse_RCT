import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <>
      <section className='inicio'>
          <Navbar></Navbar>
          <div className='container'>
            <ItemListContainer titulo={'Bienvenido al Cambio'}></ItemListContainer>
            </div>
      </section>
      
    </>
  )
}

export default App
