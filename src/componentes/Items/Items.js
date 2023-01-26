

import { NavLink } from 'react-router-dom'
import "../ItemListContainer/Item.css"

 function Item (props) {
    return (
      
        <div className= "itemc">  
        
            <div className="w-full max-w-sm  rounded-lg">
                    <img className="p-10 w-50 mx-auto" src={props.img} alt="" />
                <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold ">{props.categoria}</h5>

                        <h5 className="text-xl font-semibold ">{props.nombre}</h5>
                    <div className="flex justify-between items-center">
                        <span >{props.valor}</span>
                        </div>
                        <div className="flex justify-between items-center">
                        <NavLink to =  {`/item/${props.id}`} >Precio y Detalles!</NavLink>
        
                    </div>
                </div>
            </div>

        </div>

    )

}
export default Item;