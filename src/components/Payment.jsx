import { MDBCard, MDBCardBody, MDBCardTitle, MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { TotalPrice } from './TotalPrice'
import { useSelector } from 'react-redux'
import { OrderSummery } from './OrderSummery'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useDispatch } from 'react-redux'
import { NavBar } from './NavBar'
import { emptyCart } from '../redux/action-creator/ActionCreators'

export const Payment = () => {

  const carts = useSelector(state => state.allProducts.cart)
  const { currentUser, signout } = useAuth()
  const [name, setName] = useState()
  const [contact, setContact] = useState()
  const [address, setAddress] = useState()
  const email = currentUser.email
  const navigate = useNavigate()
  const usersCollectionRef = collection(db, 'Users')
  const dispatch = useDispatch()

  const createUser = async (user) => {
    await addDoc(usersCollectionRef, user)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let user = {
      name: name,
      address: address,
      contant: contact,
      email: email,
      orders: carts
    }
    
    createUser(user)

    setAddress('')
    setName('')
    setContact('')
    dispatch(emptyCart())
    signout()

    navigate('/exit')
  }


  return (
    <>
      <NavBar isPayment={true} onLogout={true} />
      <MDBContainer className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <MDBRow>
          <MDBCol start>
            <MDBCard>
              <MDBCardTitle className='d-flex justify-content-center'>
                Payment Portal
              </MDBCardTitle><hr />
              <MDBCardBody>
                <form onSubmit={handleSubmit}>
                  <div>

                    <MDBInput
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className='m-2' label='Full Name' type='text' style={{ width: '30vw' }} required />

                    <MDBInput className='m-2' label='Email' placeholder={email} readonly type='email' style={{ width: '30vw' }} />

                    <MDBInput
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className='m-2' label='Contact' type='tel' pattern='^[6-9]\d{9}$' style={{ width: '30vw' }} required />

                    <MDBInput
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className='m-2' label='Address' textarea rows={3} style={{ width: '30vw', minHeight: '90px' }} required />

                    <div className="d-flex justify-content-center">
                      <MDBBtn type='submit'>Order</MDBBtn>
                    </div>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol end>
            <MDBCard>
              <MDBCardTitle className='d-flex justify-content-center'>
                Order Summary
              </MDBCardTitle><hr />
              <MDBCardBody>
                <div className="container">
                  {carts.map(cart => {
                    return <OrderSummery cart={cart} />
                  })}
                </div>
                <TotalPrice isPayment={true} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  )
}
