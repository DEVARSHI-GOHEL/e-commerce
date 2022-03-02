import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { Carousel } from './Carousel'
import { NavBar } from './NavBar'
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore";
import { AllProductsCategory } from './AllProductsCategory'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/action-creator/ActionCreators'
import { useSelector } from 'react-redux'

export const Dashboard = () => {

    const { signout } = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector(state => state.allProducts.products)

    function handleSubmit() {
        try {
            signout()
            navigate('/login')
        } catch {
        }
    }

    const productsCollectionRef = collection(db, 'products')

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef)
            dispatch(setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
        }
        getProducts()
    }, [])

    return (
        <>
            <div className="bg bg-light">
                <NavBar onLogout={handleSubmit}></NavBar>
                <Carousel></Carousel>
                {products.length > 1 && < AllProductsCategory />}
            </div>
        </>
    )
}
