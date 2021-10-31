import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import useAuth from '../../Contexts/useAuth';



const PlaceOrder = () => {
    const { exploreCity } = useParams();
    const { user } = useAuth();
    // console.log(user.email)
    const [chooseCity, setChooseCity] = useState({});



    const { register, handleSubmit, reset } = useForm({ defaultValues: { email: user?.email } });

    useEffect(() => {
        fetch(`https://protected-oasis-73712.herokuapp.com/exploreCityData/${exploreCity}`, {
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                setChooseCity(data);
            })
    }, [reset]);
    // console.log(chooseCity.img)


    // booking form
    const onSubmit = data => {
        var pair = { image: chooseCity?.img, title: chooseCity?.title, description: chooseCity?.description };
        data = { ...data, ...pair };
        console.log(data)

        fetch('https://protected-oasis-73712.herokuapp.com/customerChoice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        reset()
    };

    return (
        <div className="container my-5 py-5">
            {/* <h2>This is PlaceOrder page{chooseCity?._id}</h2> */}

            <Container>
                <Row className="g-3">
                    {/* image column */}
                    <Col sm="12" xs="12" md="6" lg="6" className="p-3">
                        <Row className="g-5">
                            <Col sm="12" xs="12" md="6" lg="6" className="w-100">
                                <img style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                }} src={chooseCity?.img} alt="" />
                            </Col>

                            {/* description column */}
                            <Col sm="12" xs="12" md="6" lg="6" className="w-100">
                                <h4 className="text-secondary">{chooseCity?.title}</h4>
                                <p className="text-secondary">
                                    {chooseCity?.description}
                                </p>
                            </Col>
                        </Row>
                    </Col>

                    {/* make order form */}
                    <Col sm="12" xs="12" md="6" lg="6" className="p-3 booking-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input required placeholder="Your Full Name" {...register("userName")} defaultValue={user.displayName} />
                            <input required placeholder="Your Address" {...register("userAddress")} />
                            <input required placeholder="Your Street" {...register("userStreet")} />
                            <input required placeholder="Your Phone" type="number" {...register("userPhone")} />
                            <input className="bg-secondary text-warning place-button" type="submit" value="Place Order" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;