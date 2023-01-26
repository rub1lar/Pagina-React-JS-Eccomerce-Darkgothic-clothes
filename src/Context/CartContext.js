import {createContext} from 'react'
import {useState} from 'react'


const CartContext = createContext(); 

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productos, cantidad) => {
        if (!isInCart(productos.id)) {
                const producto = {
                "id": productos.id,
                "img":productos.img,
                "nombre": productos.nombre,
                "valor": productos.valor,
                "cantidad":cantidad,
                "stock": productos.stock
            }
            setCart([...cart,producto])     
        } else {
            const cartAux = cart.map(p =>{
                if(p.id===productos.id){
                    const newProd = {...productos,cantidad:p.cantidad+cantidad}
                    return newProd
                }
                return p
            })
            setCart(cartAux)
        }
    }
    const removeItem =(id) => { 
        setCart(cart.filter((prod)=> prod.id !== id))
         }


         const cartQuantity = () => {
            return cart.reduce((acc, prod) => acc += prod.cantidad,0)
        }

        const quitarUna = (id) => {
            const cartAux = cart.map(p =>{
              if(p.id===id){
                  const newProd = {...p,cantidad:p.cantidad-1}
                  return newProd
              }
              return p
          })
          setCart(cartAux)
      }
    
    
    /* (productos) => {
        const newProducts = cart.filter((p) => p.id !== productos.id);
        setCart(newProducts);
    } */
    const clear = () => {
        setCart([])
        
    }
    
    const isInCart = (id) => {
        return cart.some((el) => el.id === id)
        
    }
    
    const cartTotal = () => {
        return cart.reduce((acc, prod)=> acc += prod.valor * prod.cantidad,0)
    }
    
    return <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cartQuantity ,quitarUna, cartTotal, cart}}>{children} </CartContext.Provider>
}

export {CartProvider}
export default CartContext