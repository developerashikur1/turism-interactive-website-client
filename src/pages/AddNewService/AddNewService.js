import React from 'react';
import { useForm } from "react-hook-form";
import './AddNewService.css'


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        fetch('http://localhost:5000/exploreCityData', {
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

        console.log(data)
    };




    return (
        <div className="container my-5">
            <div className="text-center mb-5 admin-panel new-service p-5">
                <h2 className="text-secondary mb-5 fw-bolder">Add Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Service title" {...register("title")} />
                    <input placeholder="Image Url" {...register("img")} />
                    <textarea placeholder="Service description" {...register("description")} />
                    <input className="submit-button-service" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewService;