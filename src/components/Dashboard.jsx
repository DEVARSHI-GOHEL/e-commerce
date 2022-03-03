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
import { MDBSpinner } from 'mdb-react-ui-kit'

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

    const productsCollectionRef = collection(db, 'Products')

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
                <NavBar onLogout={handleSubmit} isCart={false}></NavBar>
                {
                    products.length === 0
                        ? <div className="d-flex justify-content-center align-items-center my-3">
                            <MDBSpinner grow className='mx-2' color='danger' size='sm'>
                            </MDBSpinner>
                            <span className='text-danger'>Loading...</span>
                        </div>
                        : <div>
                            <Carousel />
                            <AllProductsCategory />
                        </div>
                }
            </div>

        </>
    )
}
