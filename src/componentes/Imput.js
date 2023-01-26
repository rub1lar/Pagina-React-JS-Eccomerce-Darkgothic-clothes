

import { useState } from "react";
import {useParams} from "react-router-dom";
import Item from "./Items/Items";
import { useEffect } from "react";
import {collection ,doc,getDocs , getFirestore } from "firebase/firestore"

function Imput(){

  const [productos, setProductos] = useState([]);
  const {categoria} = useParams ();
  const [filter, setFilter] = useState("");
  const [resultadoBusqueda, setResultadoBusqueda]= useState([])



  const filtrar = (itemABuscar) => {
    //anilizar lo que tengo q filtrar
    let action = productos.filter((producto)=> producto.nombre.toLowerCase().startsWith(itemABuscar.trim().toLowerCase()))
    setResultadoBusqueda(action)
  }
  const changeHandler= (e) => {
    setFilter(e.target.value)
    filtrar(e.target.value)
  }
  

  useEffect(() => {
    const db = getFirestore(); 

    const itemsCollection = collection(db, "items");
    
    getDocs(itemsCollection).then((snapshop)=>{
      if (snapshop.size===0){
        console.log ( "no resultados");
      }
      setProductos(snapshop.docs.map((doc)=>({id: doc.id, ...doc.data() } )));
    }); 
},
 [] );


return ( 
          <div>
            <input id="filter" name ="filter" type="text" value ={filter}onChange={changeHandler}   />
            { resultadoBusqueda.map((el)=>(
                <Item 
               key={el.id}
               id={el.id}
                nombre={el.nombre}
                stock={el.stock}
                categoria={el.categoria}
                img = {el.img}
                valor = {el.valor}
                />
              )) }
            { productos.filter((prod) => prod.categoria === categoria).map((el)=>(
                <Item 
               key={el.id}
               id={el.id}
                nombre={el.nombre}
                stock={el.stock}
                categoria={el.categoria}
                img = {el.img}
                valor = {el.valor}
                />
              )) }
               </div>
  
        
              );
  } 
  export default Imput;