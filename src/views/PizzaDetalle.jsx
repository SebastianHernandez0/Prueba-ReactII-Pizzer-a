import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { CounterContext } from "../context/Context"
import Navbar from "../component/Navbar"
import CarritoPng from "/carrito-de-compras.png"

export default function PizzaDetalle() {

    const { id } = useParams()
    const { api,addToCart } = useContext(CounterContext)
    const newApi = [...api]

    const IndexPizza = newApi.findIndex(ele => ele.id === id)

    const pizza = api[IndexPizza]


    return (
        <div >
            <div className="PizzaDetalle">
                <div>
                    <img src={pizza.img}></img>
                </div>
                <div>
                    <h2 className="PizzaDetalle__h2">{pizza.name}</h2>
                    <p className="PizzaDetalle__p">{pizza.desc}</p>
                    <h4>Ingredientes: </h4>
                    <ul>
                        <li><div><i class="fa-solid fa-pizza-slice"></i> </div>  {pizza.ingredients[0]}</li>
                        <li><div><i class="fa-solid fa-pizza-slice"></i> </div>  {pizza.ingredients[1]}</li>
                        <li><div><i class="fa-solid fa-pizza-slice"></i> </div>  {pizza.ingredients[2]}</li>
                        <li><div><i class="fa-solid fa-pizza-slice"></i> </div>  {pizza.ingredients[3]}</li>
                    </ul>
                    <div className="PizzaDetalle__details">
                        <h1>Precio: ${pizza.price}</h1>
                        <button onClick={()=> addToCart(pizza)}><img src={CarritoPng}></img>Añadir</button>
                    </div>

                </div>
            </div>


        </div>

    )
}