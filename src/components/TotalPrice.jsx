import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const TotalPrice = ({ isEmpty, isPayment }) => {

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
        let classList = "d-flex justify-content-end m-2 w-90"
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
                <MDBBtn outline color='info' disabled={isPayment} onClick={goToPayment}>
                    Total price: {totalPrice}
                </MDBBtn>
            </div>
        </>
    )
}
