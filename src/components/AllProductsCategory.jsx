import React from 'react'
import { Sports } from './Sports'
import { Toys } from './Toys'
import { Clothing } from './Clothing'
import { useSelector } from 'react-redux'


export const AllProductsCategory = () => {

    const products = useSelector(state => state.allProducts.products)

    return (
        <>
            <div className="text-center my-3">
                <h4>Sports & Outdoors</h4>
                <div className='d-flex justify-content-center'>
                    <hr style={{ width: '100px' }} />
                </div>
                <Sports />
            </div>

            <div className="text-center my-3">
                <h4>Toys & Games</h4>
                <div className='d-flex justify-content-center'>
                    <hr style={{ width: '100px' }} />
                </div>
                <Toys />
            </div>

            <div className="text-center my-3">
                <h4></h4>
                <div className='d-flex justify-content-center'>
                    <hr style={{ width: '100px' }} />
                </div>
                <Clothing />
            </div>
        </>
    )
}
