import React from 'react';
import ExploreCity from '../ExploreCity/ExploreCity';
import Newsletter from '../Newsletter/Newsletter';
import Overview from '../Overview/Overview';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Overview></Overview>
            <hr className="container text-warning" />
            <ExploreCity></ExploreCity>
            <hr className="container text-warning" />
            <br />
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;