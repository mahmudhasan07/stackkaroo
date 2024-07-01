"use client"
import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <section className='relative'>
            <img id='banner_img' src="https://i.ibb.co/xDgHRjS/Rectangle-53.png"  alt="" />
            <div id='banner_content' >
                <img src="https://i.ibb.co/gtzWTL0/Stackkaroo-removebg-preview-1.png" className='w-fit mx-auto' alt="" />
                <div>
                    <h1>Grow your</h1>
                    <h1>BUSINESS <br /> WITH US!!</h1>
                </div>
            </div>
        </section>
    );
};

export default Banner;