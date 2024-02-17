import { useContext } from "react"
import { CounterContext } from "../context/Context"

export default function Cart() {

    const {cart, addToCart, DisminuirFromCart, clearCart, precio,setPrecio, RemoveFromCart } = useContext(CounterContext)
    
    return (

        <div className="carrito">

            <h3>Detalles del pedido: </h3>

            <div className="carrito__items">
                {cart.map((ele,i) => (
                    <div className="items__item" key={i}>

                        <img className="carro__img" src={ele.img}></img>
                        <div>
                            <h2 style={{color:"green"}} >${ele.price*ele.quantity}</h2>
                        <button style={{backgroundColor:"green"}} onClick={()=>addToCart(ele)}>+</button>
                        <button style={{backgroundColor:"red"}} onClick={()=>DisminuirFromCart(ele)}>-</button>
                        <button style={{backgroundColor:"black"}} onClick={()=>RemoveFromCart(ele)}>Remover</button>

                        </div>
                        
                        


                    </div>
                    



                ))}
                <h1 style={{color:"black"}}>Total: ${precio}</h1>
                <button style={{backgroundColor:"green"}}>Ir a Pagar</button>
            </div>


            

        </div>

    )
}