
import React, { useContext } from "react";
import { useState } from 'react'
import Notiflix from 'notiflix'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import CartContext from "../Context/CartContext"





export default function InputModal({ cart, valorTotal }) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [mail, setMail] = useState("")
  const [mailConfirmacion, setMailConfirmacion] = useState("")
  const {clear} = useContext(CartContext)


  function handleSubmit(event) {
    event.preventDefault()
    const date = new Date();
    const order = {
      buyer: {
        "nombre": name,
        "telefono": phone,
        "mail": mail,
      },
      "items": cart,
      "Valor Total": valorTotal,
      "Fecha": date
    }
    console.log(order)
    const db = getFirestore();


    const ordersCollection = collection(db, "OrdersCollection");
      addDoc(ordersCollection, order).then(({ id }) =>
        Notiflix.Report.success(
          '¡Orden enviada!',
          `Su numero de orden es: ${id}`,
          'Entendido!',
          {
            width: '360px',
            svgSize: '120px',
          },
        ),
        setShowModal(false),
        clear()
      ) 




  }




  return (<div className="fondo ">
    <>
    <div className="finalizar">
      <button
        className="botonesGeneral"
        type="button"
        onClick={() => cart.length > 0 ? setShowModal(true) : Notiflix.Report.failure(
          'Ups!',
          'El carro esta vacio!',
          'Entendido!'
        )}>
       Finalizar y Enviar Orden De Compra
      </button>
          
      </div>

      {showModal ? (
  <div>
  <div className="custom-form">
    <div className="relative my-6 mx-auto max-w-3xl w-96">
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative rounded-lg shadow dark:bg-gray-700">
          
          <div className="py-6 px-6 lg:px-8">
            <form onSubmit={handleSubmit} className="space-y-6" action="#">
            <div className="vistaModal">
            <h3 className="mb-4 text-xl font-medium text-gray-900 text-center">
              Ingresa tus datos!
            </h3>
              <div>
                <label htmlFor="usuario" className="m-1">
                  Nombre y Apellido:
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  name="name"
                  id="name"
                  className=""
                  placeholder="Ingrese nombre y apellido "
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="usuario" className="m-1">
                  Telefono:
                </label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="1100002222"
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="usuario" className="m-1">
                  Email:
                </label>
                <input
                  onChange={(e) => setMail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="mail@gmail.com"
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="usuario" className="m-1">
                  Verifique su mail:
                </label>
                <input
                  onChange={(e) => setMailConfirmacion(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className=""
                  placeholder="Ingrese nuevamente su mail"
                  required
                ></input>
              </div>

              <div className="flex justify-between">
                <div className="flex items-start"></div>
              </div>
            <div className="botonesModal">
          
              <button
                type="submit"
                className={`w-full ${
                  mail !== mailConfirmacion ? "invisible " : "visible"
                } botonesGeneral `}
              >
                Enviar!
              </button>
              <button
            onClick={() => setShowModal(false)}
            type="button"
            className="cerrar botonesGeneral"
    
            data-modal-toggle="authentication-modal-2"
          >
            Cerrar formulario
          </button>
              
          </div>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
</div>

      ) : null}
    </> </div>
  );
}













