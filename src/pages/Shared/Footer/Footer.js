import React from 'react';
import { Button, Col, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Contexts/useAuth';
import './footer.css'

const Footer = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="footer-page">
            <div className="p-5 container">
                <Row className="text-center g-5">
                    <Col sm="12" xs="12" md="6" lg="4">
                        <h3>Contact with us</h3><br />
                        <h5>Phone Support</h5>
                        <h5>24 HOURS A DAY</h5>
                        <h5>+ 01 345 647 745</h5>
                    </Col>
                    <Col sm="12" xs="12" md="6" lg="4">
                        <h3>Quick Link's</h3>
                        <Nav.Link className="text-warning fs-5 " as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="text-warning fs-5 " as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link className="text-warning fs-5" as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>

                        {
                            user.email ?
                                <Button onClick={logOut} variant="danger" size="sm">
                                    Log out
                                </Button>
                                : ''
                        }
                    </Col>
                    <Col sm="12" xs="12" md="6" lg="4">

                        {/* <div style={{ position: 'relative', textAlign: 'right', width: '100%', height: '400px' }}><div style={{ overflow: 'hidden', background: 'none!important', width: '100%', height: '400px' }}><iframe style={{ height: '400px !important', width: "100%" }} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600 &amp; height=400 &amp; hl=en &amp;q=dhaka uni&amp; t=&amp; z=14 &amp; ie=UTF8 &amp; iwloc=B &amp; output=embed"></iframe><a href="https://www.fnfgo.com/">FNF Online Mods</a></div></div> */}


                        <div style={{ width: "100%" }}><iframe style={{ width: "100%", height: "600" }} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">gps systems</a></iframe></div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;