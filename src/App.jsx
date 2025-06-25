import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className='inicio'>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="Bienvenido al Cambio" />} />
          <Route path="/category/:categoryName" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;