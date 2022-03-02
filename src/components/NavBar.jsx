import { Navbar } from 'react-bootstrap';
import logoutImg from '../images/log-out.png'
import storeLogo from '../images/store.png'
import shoppingCartFilled from '../images/shopping-cart-filled.png'
import shoppingCart from '../images/shopping-cart.png'
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn, MDBBadge } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

export function NavBar(props) {

    const carts = useSelector(state => state.allProducts.cart)
    const navigate = useNavigate()

    return (
        <>
            <Navbar bg="light" expand="lg">
                <div className='container-fluid'>
                    <Navbar.Brand>
                        <Link to='/'>
                            <img src={storeLogo} alt='' style={{ width: '30px' }} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <div className="d-flex-justify-content-end ">
                        <MDBBtn color='warning' className='m-1' onClick={props.onLogout} size='sm' floating>
                            <img src={logoutImg} style={{ width: '20px' }} alt="" />
                        </MDBBtn>
                        <MDBBtn color='warning' onClick={() => navigate('/cart')} className='m-1 p-1' size='sm' floating>
                            {carts.length !== 0
                                ? <img src={shoppingCartFilled} alt="" style={{ width: '20px', opacity: '50%' }} />
                                : <img src={shoppingCart} alt="" style={{ width: '20px', opacity: '50%' }} />
                            }

                        </MDBBtn>
                        <MDBBadge color='danger' notification pill>
                            {carts.length}
                        </MDBBadge>
                    </div>
                </div>
            </Navbar>
        </>
    );
}