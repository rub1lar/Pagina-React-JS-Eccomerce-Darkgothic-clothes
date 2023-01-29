import CartContext from "../Context/CartContext";
import { useContext } from "react";
import "./ItemListContainer/Item.css";
import CartItemCount from "./Items/CartItemCount";

function CartItem(props) {
    const { removeItem, quitarUna } = useContext(CartContext);

    console.log(props, 'cartItem')
    return (
        <div className=''>
        <div className='itemc centra'>
            <div className=' centra'>
                <div  >
                    <h5 className='text-xl font-semibold '>
                        {props.categoria}
                    </h5>
                    <h5 className='text-xl font-semibold '>{props.cantidad}</h5> 
                    <h5 className='text-xl font-semibold '>{props.nombre}</h5>
                    <img className='imagen' src={props.img} alt='' />
                    <div >
                        <span>${props.valor}</span>
                        {<CartItemCount stock={props.stock} initial={1}  />}

                        <button className="botonAgregar"onClick={() => removeItem(props.id)}>
                        Borrar Todo
                        </button>   
                       {props.cantidad > 1 &&  <button   className="botonAgregar" onClick={() => quitarUna (props.id)}>
                            Borrar Unidad
                        </button>   }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default CartItem;