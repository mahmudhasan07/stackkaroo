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
                    <h1 id='head1'>Grow your</h1>
                    <h1 id='head2'>BUSINESS <br /> WITH US!!</h1>
                </div>
            </div>
            <div id='banner_content2' className='relative'>
                <h1 id='head3'>Unlock Your Business’s Full Potential Now..!</h1>
            </div>
                <p id='banner_text' className='mt-14 mb-8 text-center font-semibold text-xl tracking-widest'>“Book a consultation with our experts and start transforming your Digital Presence”</p>
        </section>
    );
};

export default Banner;