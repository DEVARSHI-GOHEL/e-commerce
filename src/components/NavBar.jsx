import { Navbar } from 'react-bootstrap';
import logoutImg from '../images/log-out.png'
import storeLogo from '../images/store.png'
import shoppingCart from '../images/shopping-cart.png'
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';

export function NavBar(props) {

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
                        <MDBBtn color='warning' className='m-1' onClick={e => {props.showCart(e)}} size='sm' floating>
                            <img src={shoppingCart} style={{ width: '20px', opacity: '50%' }} alt="" />
                        </MDBBtn>
                    </div>
                </div>
            </Navbar>
        </>
    );
}