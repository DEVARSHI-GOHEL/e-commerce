
import React from 'react'
import { useSelector } from 'react-redux'
import { ProductList } from './ProductList'

export const Sports = () => {
    let products
    async () => products = await useSelector(state => state.allProducts.products)
    console.log(products)
    // const sportsProducts = products.map(product => {
    //         if(product['Category'].includes('Sports & Outdoors')){
    //             return product
    //         }
    // })
    // console.log(sportsProducts)

    return (
        <>
            <ProductList />
        </>
    )
}
