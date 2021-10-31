import React, { useEffect, useState } from 'react';
import { Accordion, Button, Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../Contexts/useAuth';
import './ManageAllOrders.css';


const ManageAllOrders = () => {
    const [users, setUsers] = useState([]);
    const [usersChoice, setUsersChoice] = useState([]);
    const { user } = useAuth();
    // console.log(users)


    useEffect(() => {
        fetch('https://protected-oasis-73712.herokuapp.com/customerChoice')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [usersChoice])



    var resArr = [];
    users.filter(function (item) {
        var i = resArr.findIndex(x => (x.userName == item.userName && x.email == item.email));
        if (i <= -1) {
            resArr.push(item);
        }
        return null;
    });


    const handleAllUsers = () => {
        fetch('https://protected-oasis-73712.herokuapp.com/customerChoice')
            .then(res => res.json())
            .then(data => setUsersChoice(data))
    }


    const handleDeleteOrders = (id) => {
        console.log(id)
        const agreed = window.confirm('Alert!!! Do You want to delete?');
        if (agreed) {
            fetch(`https://protected-oasis-73712.herokuapp.com/customerChoice/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('your item is deleted successfully');
                        const remainingUsers = usersChoice.filter(order => order._id !== id);
                        setUsersChoice(remainingUsers);
                    }
                    console.log(data);
                })
        }
        else {
            alert('thank you!!!')
        }
    }




    return (
        <div className="container my-5 py-5">
            <div className="text-center mb-5 admin-panel p-5">
                <h2 className="fw-bolder text-warning">Welcome!!!</h2>
                <h3 className="fw-bolder text-danger">{user.displayName}</h3>
                <h4 className="fw-bolder text-warning">TO</h4>
                <h4 className="fw-bolder text-success">Admin Panel</h4>
            </div>
            <Container className="mt-5">
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row className="admin-navs g-3">
                    <Col className="border bg-warning px-5 pb-5 pt-3" xs={12} md={4}>
                        <Button size="sm" className="manageButton mb-3 fs-6 fw-bolder bg-white text-warning" onClick={handleAllUsers}>All</Button>
                        {
                            resArr.map(person => <Button
                                size="sm"
                                className="manageButton mb-3 fs-6 fw-bolder bg-white text-warning"
                                key={person.userName}
                            >
                                Name: {person.userName}
                            </Button>)
                        }
                    </Col>


                    {/* users choice control table */}
                    <Col className="border" xs={12} md={8}>
                        {
                            !usersChoice.length > 0 ?

                                <div>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header
                                                className="fw-bolder fs-3"
                                            ><span className="text-danger fw-bolder fs-5">Attention!!!</span> &nbsp; <span className="fw-bolder fs-5">Click hare and read carefully</span></Accordion.Header>
                                            <Accordion.Body className="bg-warning text-black">
                                                <h5>Welcome! to Admin panel</h5>

                                                <span className="fw-bolder text-success">If you want to see all users data click All button or if you want to see single users click on their name.</span><br />

                                                You Can Control Full website from this Admin panel. Like users activity, manage orders(approve, cancel, update new services and more that you want).
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>

                                :

                                < Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>user name</th>
                                            <th>Order Name</th>
                                            <th>Cancel Order</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usersChoice.map(userChoice => <tr
                                                key={userChoice._id}
                                            >
                                                <td># {userChoice._id.slice(0, 4)}</td>
                                                <td>{userChoice.userName}</td>
                                                <td>{userChoice.title}</td>
                                                <td>
                                                    <Button onClick={() => handleDeleteOrders(userChoice._id)} variant="danger" size="sm">
                                                        Cancel Order
                                                    </Button>
                                                </td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </Table>}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllOrders;