import { MDBBtn, MDBCard, MDBInput, MDBCardHeader, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { emptyCart } from '../redux/action-creator/ActionCreators'

export const LogIn = () => {

    const { login } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    dispatch(emptyCart())
    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            await login(email, password)
            navigate('/')
        } catch {
            setError("Failed to Log In")
        }

    }

    return (
        <>
            <MDBContainer className="align-items-center d-flex justify-content-center"
                style={{ minHeight: '100vh' }}>

                <div>
                    <div className="d-flex justify-content-center">
                        <h3 className='mb-4 text-info px-5'>Welcome to Dev's online shop</h3>
                    </div>
                    <MDBCard className='p-3'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <MDBCardHeader className='text-center mb-3'>
                                    <h4>Log In</h4>
                                </MDBCardHeader>
                                {error && <Alert variant='danger'>{error}</Alert>}

                                <MDBCardBody>
                                    <MDBInput className='m-2' value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        label='Email' type='email' size='lg' style={{ width: '23rem' }} />

                                    <MDBInput className='m-2' value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        label='Password' type='password' size='lg' style={{ width: '23rem' }} />

                                    <div className="d-flex justify-content-center mt-4">
                                        <MDBBtn size='sm' type='submit'>Log In</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </div>
                        </form>
                    </MDBCard>
                    <p className='text-center mt-3'>New to the website? <Link to='/signup'>Sign Up</Link></p>
                </div>
            </MDBContainer>
        </>
    )
}
