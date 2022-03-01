import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit'
import React from 'react'
import shoppingCartFull from '../images/shopping-cart-filled.png'

export const ProductList = (props) => {

    return (
        <>
            <li style={{ listStyleType: 'none' }}>
                <div className='container-fluid'>
                    <div>
                        <MDBCard style={{ width: '200px', height: 'auto' }} className='m-2'>
                            <MDBCardHeader>
                                <div className='d-flex justify-content-center'>
                                    <img src={props.product['Image']} alt='' style={{ width: '150px', height: '100px' }} />
                                </div>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <h5>{props.product['Product Name'].slice(0, 15)}</h5>
                                <div className='text-success mb-2'>{props.product['Selling Price']}
                                </div>
                                <div className="d-flex justify-content-end">
                                    <MDBBtn color='secondary' onClick={e => props.onAddCart(e)} size='sm' floating>
                                        <img src={shoppingCartFull} style={{ width: '15px' }} alt="" />
                                    </MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                </div>
            </li>
        </>
    )
}
