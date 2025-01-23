import React from 'react'
import NavbarComp from './Navbar'
import { useSelector } from 'react-redux'
const CartPage = () => {
  const {cart}=useSelector((state)=>state.cart)
  return (
    <div>
        <NavbarComp/>CartPage
        {cart.length? <div>
         { cart.map((item,index)=>{
          console.log(item)
          return (
            <div >
      <h1>{item.title}</h1>
      <h1>{item.price}</h1>
          </div>
          )
         })}
          </div>: <p>cart empty!!</p>}</div>
  )
}

export default CartPage