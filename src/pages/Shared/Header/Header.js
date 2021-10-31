import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Contexts/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    // const { user, logOut } = useFirebase({});
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar sticky="top" expand="lg" bg="warning">
                <Container>

                    {/* navbar logos */}
                    <Navbar.Brand as={Link} to="/home" className="d-flex align-items-center" >
                        <img
                            alt=""
                            src="https://i.ibb.co/Dbs69jJ/logo.png"
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                        />{' '}
                        <span className="text-white fw-bold">V M TRAVELS</span>
                    </Navbar.Brand>

                    {/* navbar links with toggle */}
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="text-secondary fs-5 fw-bold" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-secondary fs-5 fw-bold" as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link className="text-secondary fs-5 fw-bold" as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>
                        {/* <Nav.Link className="text-secondary fs-5 fw-bold" as={Link} to="/placeorder">Place Order</Nav.Link> */}
                        {
                            !user.email ? <Nav.Link className="text-secondary fs-5 fw-bold" as={Link} to="/login">Login</Nav.Link> : ''
                        }
                        {/* navbar button */}
                        {
                            user.email &&
                            <Navbar.Text>
                                Signed in : <a href="#login">{user.displayName}</a>
                            </Navbar.Text>
                        }
                        &nbsp; &nbsp;

                        {
                            user.email ?
                                <Button onClick={logOut} variant="danger" size="sm">
                                    Log out
                                </Button>
                                : ''
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;