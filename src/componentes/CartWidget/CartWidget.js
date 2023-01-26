import "./carrito.css"
import { NavLink } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { useContext } from 'react'
import logo from "./logo1.png"

function CartWidget() {
  const { cartQuantity} = useContext(CartContext)
  
  return (
    <NavLink to={`/cart`} ><button type="button">
  
     <img  src={logo} alt="" />
        <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6
          text-xs font-bold  bg-red-500 rounded-full border-1 border-white dark:border-gray-900">{cartQuantity() || ''}</div>
        
    </button></NavLink>

  );
}

export default CartWidget;