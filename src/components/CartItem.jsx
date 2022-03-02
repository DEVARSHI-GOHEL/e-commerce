import React, { useState } from 'react'
import { MDBBtn, MDBCard, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit'
import { adjustItemQty, removeFromCart } from '../redux/action-creator/ActionCreators'
import { useDispatch } from 'react-redux'
import deleteIcon from '../images/remove.png'
import { Form } from 'react-bootstrap'

export const CartItem = ({ cart }) => {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState()

    const deleteFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const onChangeHandler = (e) => {
        setQuantity(e.target.value)
        console.log(quantity)
        dispatch(adjustItemQty(cart.id, e.target.value))
    }

    return (
        <>
            <div className='bg-light my-3' style={{ width: '100%' }}>
                <MDBCard style={{ width: '100%' }}>
                    <MDBRow>
                        <div className='col-2'>
                            <img src={cart['Image']} style={{ width: '200px' }} />
                        </div>
                        <div className='col-8 mx-2'>
                            <h5>
                                {cart['Product Name']}
                            </h5>
                            <div className='row '>
                                <div >
                                    Price: <span className='text-success'>{cart['Selling Price']}</span>
                                </div>
                                <div >
                                    Quantity: <span className='text-success'>{cart.qty}</span>
                                </div>
                                <div >
                                    Add more?: 
                                    <span>
                                        <MDBInput
                                            value={quantity}
                                            type='number'
                                            min='1'
                                            onChange={onChangeHandler} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col align-items-center justify-content-center d-flex">
                            <MDBIcon floating color='danger' className='d-flex justify-content-center m-1' onClick={() => deleteFromCart(cart.id)}>
                                <img src={deleteIcon} style={{ width: '40px' }} alt="" />
                            </MDBIcon>
                        </div>
                    </MDBRow>
                </MDBCard>
            </div>
        </>
    )
}
