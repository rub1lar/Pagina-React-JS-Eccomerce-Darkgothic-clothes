import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import CartContext from '../../Context/CartContext';
import  "./detail.css"




export default function ItemCount({ stock, initial, agregarCarrito }) {
    console.log("PROPS DE ITEM COUNT: ", initial, stock, onAdd)
    const [value, setValue] = useState(initial);

    
    function onAdd(cantidad) {
        (stock) > value ? setValue(value + 1) : setValue(value + 0); 
    }

    function onSubstract() {
        value !== 0 ? setValue(value - 1) : setValue(value + 0);
    }
    
    return (
        <div>
            <h1 className='text-white font-bold mt-2'>Stock Actual: {stock}</h1>
            <div className='inline-flex '>
                <button className="fill-white h-7 w-7 p-1 hover:bg-slate-700 rounded-full mx-3" onClick={onSubstract}>-</button>
                <h1 className='text-white font-bold mx-5 text-xl'>{value}</h1>
                <button className="fill-white  h-7 w-7 hover:bg-slate-700  rounded-full  mx-3" onClick={onAdd}>+</button>
            </div>
            <button onClick={() => agregarCarrito(value)}> Agregar al carrito</button>   

        </div>
    );

}