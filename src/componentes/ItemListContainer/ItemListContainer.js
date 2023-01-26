import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemLista from '../Items/ItemList';

import {collection ,doc,getDocs , getFirestore } from "firebase/firestore"

function ItemListContainer (props){
  const [productos, setProductos] = useState([]);
  const {id} = useParams();
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
      
      getDocs(itemsCollection).then((snapshop)=>{
        if (snapshop.size===0){
          console.log ( "no resultados");}
        /*   if(id){
            setProductos(items.filter((prod)=> prod.categoria === id))} */
        setProductos(snapshop.docs.map((doc)=>({id: doc.id, ...doc.data() } )));
      }); 
  },
   [id] );

return (
  <Fragment>
<ItemLista productos={productos}/> 

</Fragment>
)

}

export default ItemListContainer;