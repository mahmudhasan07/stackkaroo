import React from 'react';
import './Chosen.css'
import { FaCircleCheck } from "react-icons/fa6";
const Chosen = () => {
    return (
        <section id='chosen'>
            <div id='chosen1' className='relative'>
                <img src="https://i.ibb.co/WgdQQFB/1946442d33d12fb38eaaac1bb6e388fd.jpg" alt="" />
                <div>
                    <h1>“Trust Stackkaroo to design and develop digital experiences that are truly exceptional !”</h1>
                </div>
            </div>
            <div id='chosen2'>
                <div id='chosen2_part1'>
                    <h1>why choose us?</h1>
                    <p><FaCircleCheck className='chosen_icon'></FaCircleCheck> Crafting Memorable Experiences</p>
                    <p><FaCircleCheck className='chosen_icon'></FaCircleCheck> Your Success is Our Priority</p>
                    <p><FaCircleCheck className='chosen_icon'></FaCircleCheck> Emphasizing User-Centric Design</p>
                    <p><FaCircleCheck className='chosen_icon'></FaCircleCheck> Delivering High quality Products</p>
                    <p><FaCircleCheck className='chosen_icon'></FaCircleCheck> Resolving Your Business Challenges</p>
                    <p><FaCircleCheck className='chosen_icon'></FaCircleCheck> On-Time Product Delivery</p>
                    <p><FaCircleCheck className='chosen_icon'></FaCircleCheck> Dedicated to Customer Satisfaction</p>
                </div>
                <div id='chosen2_part2'>
                    <img src="https://i.ibb.co/856B6pd/543ac7b1f7a8fea01e3b120ec8ce2b1b-jpeg.jpg" alt="" />
                </div>
            </div>
            <div id='chosen3'>
                <h1>Over 2K Projects Successfully Completed and Many More on the Way!</h1>
                <p>Do not waste any more time. Empower your business with our innovative digital and web solutions. Join Stackkaroo and take a new step in growing your business.</p>
                <p>More than 2000 online businesses have worked with us. You just relax, we can understand your business needs very well and will take your business to greater heights.</p>
                <p>Do not waste any more time. Empower your business with our innovative digital and web solutions. Join Stackkaroo and take a new step in growing your business.</p>

            </div>
            <div id='chosen4'>
                <h1>Start Your Development Journey With Us..!</h1>
                <p className='my-8 text-center font-semibold text-xl tracking-widest'>“Book your consultation now and join the success story of hundreds of our satisfied clients”</p>

            </div>
        </section>
    );
};

export default Chosen;