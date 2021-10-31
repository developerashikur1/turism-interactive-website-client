import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Newsletter = () => {
    return (


        // News Letter
        <div className="container bg-white my-5 p-5 rounded">
            <Container>
                <Row className="g-5 d-flex align-items-center border-end">

                    {/* icon and text */}
                    <Col sm="12" xs="12" md="6" lg="6" className="d-flex align-items-center gap-5">
                        <i style={{ fontSize: "2rem" }} className="fas fa-bullhorn text-warning"></i>
                        <div>
                            <h3 className="text-warning">Get Updates & More</h3>
                            <p className="text-secondary">Thoughtful thoughts to your inbox</p>
                        </div>
                    </Col>

                    {/* input and button */}
                    <Col sm="12" xs="12" md="6" lg="6">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Your full name" aria-label="Your full name" aria-describedby="basic-addon2" />

                            <Button className="bg-warning border-1 border-warning rounded-0 rounded-end">Submit</Button>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Newsletter;