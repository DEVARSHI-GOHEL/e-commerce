import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TotalPrice = ({ isEmpty }) => {

    const carts = useSelector(state => state.allProducts.cart)
    const [totalQuantity, setTotalQuantity] = useState()
    const [totalPrice, setTotalPrice] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        let item = 0
        let price = 0

        carts.forEach((cart) => {
            item += cart.qty
            price += cart.qty * parseInt(cart['Selling Price'].slice(1))
        })

        setTotalPrice(price)
        setTotalQuantity(item)

    }, [carts, totalPrice, totalQuantity, setTotalPrice, setTotalQuantity])

    function dynamicClass() {
        let classList = "container-fluid d-flex justify-content-end "
        if (isEmpty) {
            classList = classList + "invisible"
            return classList
        } else {
            return classList
        }
    }

    const goToPayment = () => {
        navigate('/payment')
    }

    return (
        <>
            <div className={dynamicClass()} >
                <MDBBtn outline color='info' onClick={goToPayment}>
                    Total price: {totalPrice}
                </MDBBtn>
            </div>
        </>
    )
}
