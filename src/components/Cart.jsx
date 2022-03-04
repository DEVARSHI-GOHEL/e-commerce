import React from 'react'
import { useSelector } from 'react-redux'
import { NavBar } from './NavBar'
import { CartItem } from './CartItem'
import { Alert } from 'react-bootstrap'
import { TotalPrice } from './TotalPrice'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export const Cart = () => {

  const navigate = useNavigate()
  const { signout } = useAuth()

  function handleSubmit() {
    try {
      signout()
      navigate('/login')
    } catch {
    }
  }

  const carts = useSelector(state => state.allProducts.cart)
  return (
    <>
      <NavBar isCart={true} onLogout={handleSubmit} />
      <div className="w-100">
        <div className="d-flex justify-content-center my-3 text-primary">
          <h4>Cart</h4>
        </div>
        {carts.length === 0 && <Alert variant='danger'>No items in cart</Alert>}
        {carts.map(cart => {
          return (<CartItem cart={cart} />)
        })}
        <TotalPrice isEmpty={carts.length === 0 ? true : false} />
      </div>
    </>
  )
}
