import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit'
import React from 'react'
import { useSelector } from 'react-redux'
import shoppingCartFull from '../images/shopping-cart-filled.png'

export const ProductList = () => {

    const products = useSelector(state => state.allProducts.products)

    return (
        <>
            {products.map(product => {
                if(product['Category'].includes('Sports & Outdoors'))
                return (
                    <li style={{ listStyleType: 'none' }}>
                        <div className='container-fluid justify-content-center text-center'>
                            <div>
                                <MDBCard style={{ width: '50%', height: 'auto' }} className='m-2'>
                                    <MDBCardHeader>
                                        <div className='d-flex justify-content-center'>
                                            <img src={product["Image"]} alt='image' style={{ width: '200px' }} />
                                        </div>
                                    </MDBCardHeader>
                                    <MDBCardBody>
                                        <h5>{product['Product Name']}</h5>
                                        <div className='text-success mb-2'>{product['Selling Price']}
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <MDBBtn color='secondary' size='sm' floating>
                                                <img src={shoppingCartFull} alt="" />
                                            </MDBBtn>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </div>
                    </li>
                )
            }
            )
            }
        </>
    )
}
