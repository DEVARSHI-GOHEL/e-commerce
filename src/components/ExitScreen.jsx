import React from 'react'
import { MDBBtn, MDBCard, MDBCardFooter, MDBCardHeader } from 'mdb-react-ui-kit'
import success from '../images/success.png'
import home from '../images/store.png'
import { Link } from 'react-router-dom'

export const ExitScreen = () => {

    return (
        <>
            <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className='container my-3'>
                    <MDBCard>
                        <div className="d-flex justify-content-center my-3">
                            <MDBCardHeader className='text-success'><h3>Successful Payment!!!</h3></MDBCardHeader>
                        </div>
                        <div className='mx-5 row d-flex justify-content-center my-3'>
                            <img src={success} className="animated rotateIn" alt="Transparent MDB Logo" style={{ width: '10vw' }} />
                        </div>
                        <div>
                            <MDBCardFooter>
                                <Link to='/' className='d-flex justify-content-center my-3' >
                                    <img src={home} style={{ width: '5vw' }} />
                                </Link>
                            </MDBCardFooter>
                        </div>
                    </MDBCard>
                </div>
            </div>
        </>
    )
}
