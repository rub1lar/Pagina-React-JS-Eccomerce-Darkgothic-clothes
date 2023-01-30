import CartItem from "./CartItem";
import CartContext from "../Context/CartContext";
import { useContext , useState} from "react";
import { Link } from "react-router-dom";
import InputModal from "./ImputModal";
import "./modal.css"

function Cart(props) {




    const { cart, clear, cartQuantity, cartTotal } = useContext(CartContext);
    const [total, setTotal] = useState(0)

    function resumenPrecio() {
      const subtotal = cart.reduce((previus, current) => previus + (current.valor * current.cantidad), 0)
      const iva = (subtotal * 0.21).toFixed(0)
      const total = Number(subtotal * 1.21).toFixed(0);
      const valores = [subtotal, iva, total]
      setTotal(valores)
  
    }

    return (<div className="fondo">
       <>
       {cart.length === 0 
       ? <p className="text-white ">Tu carrito esta vacio! <Link to='/' className="botonAgregar">Podes comenzar tu compra aqui</Link>  </p>
        : <div >
        <div className="cartItem">
      {cart.map((el) => (
          <CartItem
          id={el.id}
          key={el.id}
          cantidad={el.cantidad}
          nombre={el.nombre}
          stock={el.stock}
          categoria={el.categoria}
          img={el.img}
          valor={el.valor}
          />
          ))}  
              </div> 
              <div>
              <div className= "modalear">
             
                  <h4 className="text-white  m-3"> Cantidad Productos:{cartQuantity()}</h4>
                  <h4 className=" text-white   m-3"> subtotal sin IVA:${cartTotal()}</h4>
                  </div>

                  <div className="cartItem ">
           <button className="botonAgregar m-3" onClick={resumenPrecio}>
         Agregar IVA
       </button> <button className="botonAgregar m-3" onClick={() => clear()}>
                      Vaciar Carrito
                  </button>
                  </div>
     <div className="text-white">
          <h2 >Subtotal: </h2>
          <h1>$ {total[0]} </h1>
          <h2 >IVA: </h2>
          <h1 >$ {total[1]} </h1>
          <h2>Total: </h2>
          <h1 >$ {total[2]} </h1>

          <InputModal cart={cart} valorTotal={total[2]}/> 
      </div>


</div>
     </div>}
       </></div>
    );
}
export default Cart;