import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Carousel } from './Carousel'
import { NavBar } from './NavBar'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { AllProductsCategory } from './AllProductsCategory'

export const Dashboard = () => {

    const { signout } = useAuth()
    const navigate = useNavigate()

    function handleSubmit() {
        console.log("mfer please work")
        try {
            signout()
            navigate('/login')
        } catch {
        }
    }

    function onAddCart(e){
        
        
    }

    const [products, setProducts] = useState([])
    const [cartProduct, setCartProduct] = useState([])
    const productsCollectionRef = collection(db, 'products')

    let showCart = (e) => {
        navigate('/cart')

    }

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef)
            setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getProducts()
    }, [])

    return (
        <>
            <div className="bg bg-light">
                <NavBar onLogout={handleSubmit} showCart={showCart}></NavBar>
                <Carousel></Carousel>
                { products.length!==0 && <AllProductsCategory products={products} onAddCart={onAddCart}/>}
            </div>
        </>
    )
}
