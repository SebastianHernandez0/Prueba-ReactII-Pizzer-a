import { useContext, useState } from "react";
import { CounterContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function Pizzas() {
  const { api } = useContext(CounterContext);
  const navigate = useNavigate();
  const IraPizza = (element) => {
    navigate(`/pizza/${element}`);
  };

  const { cart, addToCart, clearCart, precio, setPrecio } =
    useContext(CounterContext);

  console.log(precio);
  return (
    <div className="pizzas__cards">
      {api.map((pizza, index) => (
        <div key={index} className="cards__card">
          <img src={pizza.img}></img>
          <h3>{pizza.name}</h3>
          <h5>Ingredientes: </h5>
          <ul>
            <li>
              <div>
                <i class="fa-solid fa-pizza-slice"></i>{" "}
              </div>{" "}
              {pizza.ingredients[0]}
            </li>
            <li>
              <div>
                <i class="fa-solid fa-pizza-slice"></i>{" "}
              </div>{" "}
              {pizza.ingredients[1]}
            </li>
            <li>
              <div>
                <i class="fa-solid fa-pizza-slice"></i>{" "}
              </div>{" "}
              {pizza.ingredients[2]}
            </li>
            <li>
              <div>
                <i class="fa-solid fa-pizza-slice"></i>{" "}
              </div>{" "}
              {pizza.ingredients[3]}
            </li>
          </ul>
          <h2>${pizza.price}</h2>

          <div className="card__btns">
            <button onClick={() => IraPizza(pizza.id)}>Ver más</button>
            <button onClick={() => addToCart(pizza)}>Añadir</button>
          </div>
        </div>
      ))}
    </div>
  );
}
