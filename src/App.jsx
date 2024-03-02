import { useState } from 'react'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import PizzaDetalle from './views/PizzaDetalle'
import Cart from './views/Cart'




function App() {


  return (
    <div className='layout'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/pizza/:id' element={<PizzaDetalle></PizzaDetalle>}></Route>
        <Route path='/carro' element={<Cart></Cart>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
