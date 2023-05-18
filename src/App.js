import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CatalogTitle from './components/CatalogTitle';
import Products from './components/Products';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Configura la ruta "/" para mostrar el componente Home */}
        <Route path="/products" element={<Products />} /> 
      </Routes>
    </Router>
  );
}

export default App;