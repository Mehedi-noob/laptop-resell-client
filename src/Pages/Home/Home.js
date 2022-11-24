import React from 'react';
import Advertize from './Advertize/Advertize';
import CatogorySection from './CategorySection/CatogorySection';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Advertize></Advertize>
            <CatogorySection></CatogorySection>
        </div>
    );
};

export default Home;