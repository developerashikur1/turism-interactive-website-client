import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Contexts/useAuth';
import './MyOrders';


const MyOrders = () => {
    const { user } = useAuth();
    const email = [user?.email];
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://protected-oasis-73712.herokuapp.com/customerChoice/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user]);


    const handleOrderCancel = (id) => {
        const agreed = window.confirm('Alert!!! Do You want to delete?');
        if (agreed) {
            fetch(`https://protected-oasis-73712.herokuapp.com/customerChoice/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('your item is deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);
                    }
                    console.log(data);
                })
        }
        else {
            alert('thank you!!!')
        }

    }


    console.log(orders)

    return (
        <div className="container py-5 my-5">
            <div className="text-center mb-5 admin-panel p-5">

                <h4>My Orders</h4>
                <h3>Total Order: <span className={orders.length > 0 ? 'text-success' : 'text-danger'}>{orders.length > 0 ? orders.length : "You have no order yet!!!"}</span></h3>
            </div>



            <Row xs={1} md={2} className="g-4">
                {
                    orders.map(order => <Col
                        key={order._id}
                    >
                        <Card className="hover">
                            <Row>
                                <div className="row rounded">

                                    <div
                                        style={{
                                            overflow: 'hidden',
                                        }}
                                        className="col-md-6">
                                        <img style={{ objectFit: 'cover', borderRadius: "5px" }} src={order?.image} alt="..." />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body">
                                            <h5 className="card-title">{order.title}</h5>
                                            <p className="card-text">{order.description}</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            <br />
                                            <Button className="bg-warning text-secondary border-0 rounded fw-bold text-white" onClick={() => handleOrderCancel(order._id)}>Cancel Order</Button>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Card>
                    </Col>

                    )
                }
            </Row>






        </div>
    );
};

export default MyOrders;