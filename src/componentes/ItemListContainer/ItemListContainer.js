import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemLista from "../Items/ItemList";

import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  //SIMULACION API

  /*   const listado = () => {
    let items = require("../../back/productos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
           
        }, 1500);
    })
  }

  useEffect(() => {
    async function fetchedItems(){
      const items = await listado(); 
      if(id){
        setProductos(items.filter((prod)=> prod.categoria === id))
      }else{
        setProductos(items)
      }
      
    }

    fetchedItems()
  }, [id] );
  
 */

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    /* 
        if (res.size===0){
          alert ( "no resultados");} */
    if (id) {
      const queryFilter = query(itemsCollection, where(`categoria`, `==`, id));
      getDocs(queryFilter).then((res) =>
        setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    } else
      getDocs(itemsCollection).then((res) =>
        setProductos(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    /*    setProductos(res.docs.map((doc)=>({id: doc.id, ...doc.data() } ))); */
  }, [id]);

  return (
    <Fragment>
      <ItemLista productos={productos} />
    </Fragment>
  );
}

export default ItemListContainer;
