import React from 'react'
import { ProductList } from './ProductList'

export const Clothing = (props) => {

    return (
        <>
            {props.products.slice(0, 150).map(product => {
                if (product['Category'].includes('Clothing, Shoes & Jewelry')) {
                    return (
                        <ul style={{ display: 'inline-block' }}>
                            <ProductList product={product} key={product.id}/>
                        </ul>
                    )
                }
            })}
        </>
    )
}
