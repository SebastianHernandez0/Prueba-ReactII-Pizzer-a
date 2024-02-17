import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext()
export default function Context({ children }) {

    const [api, setApi] = useState([])

    const [cart, setCart] = useState([])
    const [precio, setPrecio] = useState(0)


    const addToCart = (item) => {

        setPrecio(precio + item.price)
        const ItemInCartIndex = cart.findIndex(ele => ele.id === item.id)
        console.log(ItemInCartIndex)
        if (ItemInCartIndex >= 0) {

            const newCart = structuredClone(cart)
            newCart[ItemInCartIndex].quantity += 1
            setCart(newCart)
        } else {
            setCart(prevState => ([
                ...prevState,
                {
                    ...item,
                    quantity: 1
                }
            ]))
        }

    }

    const DisminuirFromCart = (item) => {

        if (item.quantity > 1) {
            const ItemInCartIndex = cart.findIndex(ele => ele.id === item.id)
            setPrecio(precio - item.price)
            const newCart = structuredClone(cart)
            newCart[ItemInCartIndex].quantity -= 1
            setCart(newCart)

        }else{
            RemoveFromCart(item)
        }
    }

    const RemoveFromCart= (item) =>{
        setCart(cart.filter(producto=> producto !== item))
        setPrecio(precio - (item.price * item.quantity))
    }

    const clearCart = () => {
        setCart([])
        setPrecio(0)
        
    }



    const getApi = async () => {

        try {
            const apiUrl = "/pizzas.json"
            const response = await fetch(apiUrl)
            const data = await response.json()
            setApi(data)
        } catch (error) {
            console.log("Ocurrio un error: ", error.message)
        }


    }

    useEffect(() => {
        getApi()
    }, [])
    return (

        <CounterContext.Provider value={{ api, cart, addToCart,RemoveFromCart, DisminuirFromCart, clearCart, precio, setPrecio }}>{children}</CounterContext.Provider>
    )


}