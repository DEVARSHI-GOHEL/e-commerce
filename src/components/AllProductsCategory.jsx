import React from 'react'
import { Sports } from './Sports'
import { Toys } from './Toys'
import { Clothing } from './Clothing'


export const AllProductsCategory = (props) => {

    let productCategory = props.products.map(product => {
        return (product['Category'].split('|')[0])
    })

    return (
        <>
            <div className="text-center my-3">
                <h4>{productCategory[0]}</h4>
                <div className='d-flex justify-content-center'>
                    <hr style={{ width: '100px' }} />
                </div>
                <Sports products={props.products} id='sport' onAddCart={props.onAddCart}/>
            </div>
            <div className="text-center my-3">
                <h4>{productCategory[1]}</h4>
                <div className='d-flex justify-content-center'>
                    <hr style={{ width: '100px' }} />
                </div>
                <Toys products={props.products} />
            </div>
            <div className="text-center my-3">
                <h4>{productCategory[7]}</h4>
                <div className='d-flex justify-content-center'>
                    <hr style={{ width: '100px' }} />
                </div>
                <Clothing products={props.products} />
            </div>
        </>
    )
}
