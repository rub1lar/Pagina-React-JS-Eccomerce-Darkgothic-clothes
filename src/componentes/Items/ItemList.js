import Item from "./Items";
import "./detail.css";
 function ItemLista({productos}){

  return ( 
    <div className="principal">
      {productos.map((el)=> <Item 
        key={el.id}
        id={el.id}
          nombre={el.nombre}
          stock={el.stock}
          categoria={el.categoria}
          img = {el.img}
          valor = {el.valor}
        />)}
    </div>

);
} 
export default ItemLista; 