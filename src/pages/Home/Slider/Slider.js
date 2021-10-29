import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const sliders = [
        {
            img: 'https://i.ibb.co/dm4sFWb/1-1.jpg', name: 'New Jersey', description: 'New Jersey is a state located on the West Coast of the United States. It is the most populous U.S. state, home to one out of eight people who live in the U.S.'
        },
        { img: 'https://i.ibb.co/MN89Cpw/1-2.webp', name: 'New Jersey1', description: 'New Jersey is a state located on the West Coast of the United States. It is the most populous U.S. state, home to one out of eight people who live in the U.S.' },
        { img: 'https://i.ibb.co/1R0FZ1V/1-3.webp', name: 'New Jersey2', description: 'New Jersey is a state located on the West Coast of the United States. It is the most populous U.S. state, home to one out of eight people who live in the U.S.' },
    ]

    return (
        <div>

            {/* sliders */}
            <Carousel fade>
                {
                    sliders.map(slider => <Carousel.Item

                        key={slider.name}

                    >

                        {/* slider image */}
                        <img
                            style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "cover",
                            }}
                            className="d-block w-100"
                            src={slider.img}
                            alt="First slide"
                        />

                        {/* slider name and description */}
                        <Carousel.Caption>
                            <h3 className="text-warning">{slider.name}</h3>
                            <p className="text-warning">{slider.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    );
};

export default Slider;