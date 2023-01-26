import ItemCount from "./ItemCount";
import "./detail.css";
import { useState, useContext } from "react";
import CartContext from "../../Context/CartContext";
import {Link} from "react-router-dom";

function ItemDetail(props) {
  const { addItem } = useContext(CartContext);
  const [cargado, estaCargado] = useState(false);

  function agregarCarrito(cantidad) {
    addItem(props, cantidad);
    estaCargado(true);
  }

  return (
    <div className="detail">
      <div>
        <div className="detail2 mx-auto">
          <img className="detail2 mx-auto" src={props.img} alt="productimage" />
        </div>

        <div className="detail px-5 pb-5 text-center">
          <h5 className="text-xl text-white font-semibold">{props.nombre}</h5>
          <h5 className="text-xl text-grey font-semibold">{props.categoria}</h5>
          <h5 className="text-xl text-white font-semibold">{props.detalle}</h5>

          <div className="flex-col  items-center ml-24"></div>
          <span className=" font-bold"> Precio : {props.valor} </span>
          {!cargado ? (
            <ItemCount stock={props.stock} initial={1} agregarCarrito={agregarCarrito} />
          ) : <Link to= "/Cart"> Ir al carrito</Link>
           }
        </div>
      </div>

    </div>
  );
}

export default ItemDetail;
