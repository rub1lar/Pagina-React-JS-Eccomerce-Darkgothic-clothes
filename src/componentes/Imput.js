

import { useState } from "react";
import {useParams} from "react-router-dom";
import Item from "./Items/Items";
import { useEffect } from "react";
import {collection ,doc,getDocs , getFirestore ,query ,where} from "firebase/firestore"

function Imput(){

  const [productos, setProductos] = useState([]);
  const {categoria} = useParams ();

  const [filtro, setFilter] = useState("");

  const [resultadoBusqueda, setResultadoBusqueda]= useState([])
  const { id } = useParams();



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
  
    if (id) {
      
      const queryFilter = query(itemsCollection, where(`nombre`, `==`, id));
      
      getDocs(queryFilter).then((res) =>
        setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    } else
      getDocs(itemsCollection).then((res) =>
        setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
  }, [id]);

return ( 
          <div className="principal1">
             <div>
            <input id="filter" name ="filter" type="text" value ={filtro}onChange={changeHandler}   /></div>

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