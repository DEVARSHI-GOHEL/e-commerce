import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit'
import React from 'react'
// import shoppingCartFull from '../images/shopping-cart-filled.png'

export const ProductList = () => {

    return (
        <>
            <li style={{ listStyleType: 'none' }}>
                <div className='container-fluid'>
                    <div>
                        <MDBCard style={{ width: '200px', height: 'auto' }} className='m-2'>
                            <MDBCardHeader>
                                <div className='d-flex justify-content-center'>
                                    image
                                </div>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <h5>heding</h5>
                                <div className='text-success mb-2'>price
                                </div>
                                <div className="d-flex justify-content-end">
                                    <MDBBtn color='secondary' size='sm' floating>
                                        cart image
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
