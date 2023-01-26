

import Navbarra from "./componentes/NavBar/navComponente";
import  "./componentes/NavBar/nav.css";
import ItemListContainer from  "./componentes/ItemListContainer/ItemListContainer";
import './componentes/ItemListContainer/Item.css';
import "./componentes/CartWidget/carrito.css"
import Carrousell from "./componentes/Carrousell"
import Bienvenida from  "./componentes/Bienvenida/Bienvenida";
import './componentes/Bienvenida/bienvenida.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from "./componentes/Items/ItemDetailContainer";
import Footer from "./componentes/footer/Footer";
 import Imput from "./componentes/Imput"; 
 import  { CartProvider } from './Context/CartContext';
import Cart from "./componentes/Cart";




function App() {
  return (

    <>
      <CartProvider>
    <BrowserRouter>
           <div className="bienvenida">
          <Bienvenida  bienvenida="Bienvenidos A NoMercy!" description="seccion0"/> 
            </div>
            <Navbarra/>
            <Carrousell/>
      
       
      <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/category/:id" element={<ItemListContainer/>} />
      <Route path="/item/:productoid" element={<ItemDetailContainer/>}/>
      <Route path="/filtro" element={<Imput/>}/>
      <Route path='/cart' element={<Cart />} />
      
   
      </Routes>
    
<Footer/>
    </BrowserRouter>
    </CartProvider>
    </>

  );
}
export default App;