import "./carrito.css"
import { NavLink } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { useContext } from 'react'
import logo from "./logo1.png"

function CartWidget() {
  const { cartQuantity} = useContext(CartContext)
  
  return (
    <NavLink to={`/cart`}  ><button className="carrito" type="button">
  
     <img  className="carritoLogo" src={logo} alt="" />
        <div className="numeros">{cartQuantity() || ''}</div>
        
    </button></NavLink>

  );
}

export default CartWidget;