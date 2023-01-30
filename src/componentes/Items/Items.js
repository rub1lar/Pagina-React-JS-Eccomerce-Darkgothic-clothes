

import { NavLink } from 'react-router-dom'
import "../ItemListContainer/Item.css"
import "./detail.css";
 function Item (props) {
    return (
                <div className="itemc">
                    
                    <img className="imagen" src={props.img} alt="" />
                <h2 id='text-m'>{props.categoria}</h2>

                    <h5 className="text-xl font-semibold ">{props.nombre}</h5>
                        <div className="">
                            <span >$ {props.valor}</span>
                       
                            <div className="">
                                <NavLink to =  {`/item/${props.id}`} className="botonAgregar" >Precio y Detalles!</NavLink>
                            </div>
                        </div>
            </div>


    )

}
export default Item;