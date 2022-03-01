import { MDBBtn, MDBCard, MDBInput, MDBCardHeader, MDBCardBody, MDBContainer } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export const SignUp = () => {

    const { signup, anonSignIn } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConf, setPasswordConf] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()

    async function signInAnon() {
        try {
            setError('')
            await anonSignIn()
            navigate('/')
        } catch {
            setError('Failed to sign in anonymously')
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordConf !== password) {
            setError("Passwords don't match")
        }

        try {
            setError('')
            await signup(email, password)
            navigate('/')
        } catch {
            setError("Failed to Sign up")
        }

    }

    return (
        <>
            <MDBContainer className="align-items-center d-flex justify-content-center"
                style={{ minHeight: '100vh' }}>

                <div>
                    <h3 className='mb-4 text-info px-5'>Welcome to Dev's online shop</h3>
                    <MDBCard className='p-3'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <MDBCardHeader className='text-center mb-3'>
                                    <h4>Sign Up</h4>
                                </MDBCardHeader>
                                {error && <Alert variant='danger'>{error}</Alert>}

                                <MDBCardBody>
                                    <MDBInput className='m-2' value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        label='Email' type='email' size='lg' style={{ width: '23rem' }} />

                                    <MDBInput className='m-2' value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        label='Password' type='password' size='lg' style={{ width: '23rem' }} />

                                    <MDBInput className='m-2' value={passwordConf}
                                        onChange={e => setPasswordConf(e.target.value)}
                                        label='Password Confirmation' type='password' size='lg' style={{ width: '23rem' }} />

                                    <div className="d-flex justify-content-around mt-4">
                                        <MDBBtn size='sm' type='submit'>Sign Up</MDBBtn>

                                    </div>
                                </MDBCardBody>
                            </div>
                        </form>
                        <div className="text-center">
                            <MDBBtn size='sm' type='btn' style={{ width: '10rem' }} color='warning'
                                onClick={signInAnon}>
                                Sign In Anonymously
                            </MDBBtn>
                        </div>
                    </MDBCard>
                    <p className='text-center mt-3'>Already have account? <Link to='/login'>Log In</Link></p>
                </div>
            </MDBContainer>
        </>
    )
}
