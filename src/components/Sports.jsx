import React from 'react'
import { useSelector } from 'react-redux'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit'
import shoppingCartFull from '../images/shopping-cart-filled.png'
import { addToCart } from '../redux/action-creator/ActionCreators'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Sports = () => {

    const products = useSelector(state => state.allProducts.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = (id) => {
        dispatch(addToCart(products.find(product => product.id === id)))
        navigate('/cart')
    }

    return (
        <>
            {products.map(product => {
                if (product['Category'].includes('Sports & Outdoors')) {
                    return (
                        <li style={{ listStyleType: 'none' }}>
                            <MDBCard className='m-3'>
                                <div className="container">
                                    <div className="row">
                                        <div className='col'>
                                            <MDBCardImage src={product['Image']} position='bottom' style={{ width: '200px', height: '200px' }} alt='...' />
                                            <MDBCardBody>
                                                <div className="d-flex justify-content-start">
                                                    <div >
                                                        <MDBCardTitle>{product['Product Name']}</MDBCardTitle>
                                                    </div>
                                                </div>
                                                <div className="text-info">
                                                    {product['Selling Price']}
                                                </div>
                                                <MDBBtn size='sm' onClick={() => { cart(product.id) }} src={shoppingCartFull} className='p-1 m-2' color='secondary'>
                                                    <img src={shoppingCartFull} alt="" style={{ width: '20px' }} className='p-1' />
                                                </MDBBtn>
                                            </MDBCardBody>
                                        </div>
                                        <div className='col my-5'>
                                            <div className="align-items-center">
                                                <MDBCardText>
                                                    {product['About Product'].split('|').slice(0, 2)}
                                                </MDBCardText>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                </div>
                            </MDBCard>
                        </li>
                    )
                }
            }
            )
            }
        </>
    )
}
