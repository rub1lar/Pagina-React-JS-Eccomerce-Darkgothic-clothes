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
    <div className="itemDetail">

      <div>



       

        <div >
       
          <h5 className="tituloDetail">{props.nombre}</h5>
          {/* <h5 >{props.categoria}</h5> */}
           <div className="detail2 mx-auto">
          <img className="imagenDetail mx-auto" src={props.img} alt="productimage" />
        </div>
          <h5 className="detalles">{props.detalle}</h5>

          <div className="flex-col  items-center ml-24"></div>
          <span className=" font-bold precio"> Precio $ : {props.valor} </span>
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
