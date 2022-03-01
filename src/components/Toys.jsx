import React from 'react'
import { ProductList } from './ProductList'

export const Toys = (props) => {

    return (
        <>
            {props.products.slice(0, 15).map(product => {
                if (product['Category'].includes('Toys & Games')) {
                    return (
                        <ul style={{ display: 'inline-block' }}>
                            <ProductList product={product} key={product['Uniq Id']} />
                        </ul>
                    )
                }
            })}
        </>
    )
}