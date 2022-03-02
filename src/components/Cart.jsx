import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from './NavBar'
import { CartItem } from './CartItem'

export const Cart = () => {

  const carts = useSelector(state => state.allProducts.cart)

  return (
    <>
      <NavBar isCart={true} />
      {carts.map(cart => {
        return ( <CartItem cart={cart}/>)
      })}
    </>
  )
}
