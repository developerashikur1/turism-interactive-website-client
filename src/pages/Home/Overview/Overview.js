import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Overview = () => {
    return (

        // overview container
        <div className="container my-5">
            <Container>
                <Row className="g-5">

                    {/* image column */}
                    <Col sm="12" xs="12" md="6" lg="6">
                        <img style={{
                            width: "100%",
                            height: "250px",
                            objectFit: "cover",
                        }} src="https://i.ibb.co/HrffpG2/Young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel-wellbeing.jpg" alt="" />
                    </Col>

                    {/* over view column */}
                    <Col sm="12" xs="12" md="6" lg="6">
                        <h4 className="text-secondary">Over View</h4>
                        <p className="text-secondary">
                            We dedicate time and resources to the high net worth and celebrity travel market. We understand the need for privacy, security, autonomy and confidentiality in this highly demanding travel market segment.  As members of the Virtuoso Luxury Travel Network we work with “on-site” expert travel providers that live and serve ultra-high-end travel destinations and have firsthand knowledge and long-standing relationships with all aspects of travel to these exclusive and reclusive resorts and accommodations. Through these incredible connections we provide customized itineraries with VIP treatment and “insider” access for travel destinations all over the world.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Overview;