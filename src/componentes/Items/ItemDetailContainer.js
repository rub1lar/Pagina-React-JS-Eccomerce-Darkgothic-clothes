

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

 
import {collection ,doc ,getDocs , getFirestore, query , where } from "firebase/firestore"


function ItemDetailContainer() {

    const {productoid} = useParams();
    const [productos, setProductos] = useState([]);
  const [loading, isLoading] = useState(true)


  useEffect(() => {
    
    const db = getFirestore()
    
    const docRef = query(collection(db, 'items'), where("id", "==", productoid))
    
    getDocs(docRef)
      .then((snapshot) => {
      setProductos(snapshot.docs.map((doc)=> ({id:doc.id, ...doc.data()})));
            isLoading(false);
      })
      }, []);


 return(
  
        <div >   
        {loading ? productos : 
        productos.filter((prod) => prod.id.includes(productoid)).map((el)=>(
          
            <ItemDetail 
            id= {el.id}
            key={el.id}
            nombre={el.nombre}
            img = {el.img}
            categoria = {el.categoria}
            detalle = {el.detalle}
            valor = {el.valor}
            stock= {el.stock}
            />
          ))}

        </div>
    );
}


export default ItemDetailContainer;