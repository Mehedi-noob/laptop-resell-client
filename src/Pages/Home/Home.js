import React from 'react';
import Advertize from './Advertize/Advertize';
import CatogorySection from './CategorySection/CatogorySection';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <div className="divider border rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <h1 className='text-center text-5xl m-5'>Our latest addition</h1>
            <Advertize></Advertize>
            <div className="divider rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <h1 className='text-center text-5xl m-5'>Choose your favourite Brand</h1>
            <CatogorySection></CatogorySection>
            <div className="divider rounded bg-gradient-to-r from-purple-500 to-pink-500"></div>
        </div>
    );
};

export default Home;