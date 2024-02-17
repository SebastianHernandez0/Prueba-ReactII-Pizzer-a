import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context, { CounterContext } from "../context/Context";
import PizzaSvg from "/pizza-icon.svg"
import CarritoPng from "/carrito-de-compras.png"
import context from "react-bootstrap/esm/AccordionContext";

export default function Navbar() {

const {precio} = useContext(CounterContext)

    return (
        <>
        <div className="layout__navbar">
            <div className="navbar">
            <NavLink to="/" activeclassname="active" className="navbar__link" > <img src={PizzaSvg} alt="Pizza-icon"></img> Pizzería Mamma Mia! </NavLink>
            <NavLink to="/carro" activeclassname="active" className="navbar__link"> <img src={CarritoPng} alt="Carrito"></img> ${precio}</NavLink>
            
            </div>  
           
        </div>
        
        
        </>
        
    )

}