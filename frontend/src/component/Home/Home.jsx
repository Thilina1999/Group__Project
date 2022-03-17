import React from 'react';
import Slider from "../Home/Slider";
import ProductItems from "../user/ProductItems";
import Intro from "../Home/Intro";
import Categories from "../user/Categories";
import Brands from "../user/Brands";

const Home = () => {
    return(
        <div>
            <br/>
            <br/>
            <Slider/>
            <ProductItems/>
            <Intro/>
            <Categories/>
            <Brands/>
        </div>
    );
};


export default Home;