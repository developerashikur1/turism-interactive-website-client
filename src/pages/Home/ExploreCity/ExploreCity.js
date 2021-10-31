import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExploreData from '../../../Hooks/useExploreData';
import './ExploreCity.css';

const ExploreCity = () => {
    const { exploreCityData } = ExploreData();


    return (
        <div className="container mb-5 mt-5">
            <h1 className="text-secondary text-center mb-5">Explore the City</h1>


            {/* all city explore by card */}
            <div>
                <Row xs={1} md={3} className="g-4">
                    {
                        exploreCityData.map(image =>
                            <Col key={image._id}>
                                <Card className="services-cards">

                                    {/* card image */}
                                    <Card.Img variant="top" src={image.img} />
                                    <Card.Body>
                                        <Card.Title className="text-secondary">{image.title}</Card.Title>


                                        {/* card description */}
                                        <Card.Text className="text-secondary">
                                            {image?.description.slice(0, 250)}
                                        </Card.Text>
                                    </Card.Body>

                                    {/* card button */}
                                    <Link to={`/placeorder/${image._id}`}>
                                        <Button className="bg-warning fw-bold border-0 rounded-0 rounded-bottom" style={{ width: "100%" }}>Click to Booking</Button>
                                    </Link>
                                </Card>
                            </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ExploreCity;