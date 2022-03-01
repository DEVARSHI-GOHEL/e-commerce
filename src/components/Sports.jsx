
import React from 'react'
import { ProductList } from './ProductList'

export const Sports = (props) => {

    return (
        <>
            {props.products.slice(0, 150).map(product => {
                if (product['Category'].includes('Sports & Outdoors')) {
                    return (
                        <ul style={{ display: 'inline-block' }}>
                            <ProductList product={product} key={product.id} onAddCart={props.onAddCart}/>
                        </ul>
                    )
                }
            })}
        </>
    )
}
