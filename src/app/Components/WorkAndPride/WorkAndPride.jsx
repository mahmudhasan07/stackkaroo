import React from 'react';
import './WorkAndPride.css'
const WorkAndPride = () => {
    return (
        <section id='work'>
            <img src="https://i.ibb.co/FKcZRPP/ffe1e1f3ba30a2dbd54ee49a2a847f63.png" alt="" />
            <h1>OUR WORK, OUR PRIDE</h1>
            <p>Checkout what our Happy Clients say about Stackkaroo</p>
            <div id='work_review'>
                <div id='review1'>
                    <div className='review_part1'>
                        <div className='review_part2'>
                            <p>“Stackkaroo’s team did a great job with their excellent website and app development expertise. They showed professionalism and dedication.”</p>
                            <h1>-Niljyoti Travels</h1>
                        </div>
                    </div>
                </div>
                <div id='review2'>
                    <div className='review_part1'>
                        <div className='review_part2'>
                            <p>“Team created a visually stunning website, aligned with the brand. Included necessary features for seamless navigation for proper functioning and intuitive interface.”</p>
                            <h1>-The Wedding Sutra</h1>
                        </div>
                    </div>
                </div>
                <div id='review3'>
                    <div className='review_part1'>
                        <div className='review_part2'>
                            <p>“Stackkaroo’steam did a great job by Integrated web features into a mobile app. Visually appealing and responsive app with a smooth user experience.”</p>
                            <h1>-TrustXGaming</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div id='info'>
                <h1 id='h1'>Transform Your Digital Presence Now..!</h1>
                <p id='p1' className='my-8 text-center font-semibold text-xl tracking-widest'>“Sign up for a personalized quote and see what we can build together”</p>
                <h1 id='h2'>SHARE YOUR PROJECT CONCEPT WITH US</h1>
                <p id='p2'>Let's collaborate to bring your ideas to reality in the digital world.Contact us at <span className='link'>info@stackkaroo.com</span> or learn more about our services at <span className='link'>https://www.stackkaroo.com</span></p>
                <h1 id='h3'>DON'T MISS THE CHANCE !!</h1>
                <h1 id='h4'>Schedule your Consultation Today..!</h1>
                <p id='p3' className='my-8 text-center font-semibold text-xl tracking-widest'>“Our experts will provide actionable insights to improve your Digital Presence”</p>
            </div>

        </section>
    );
};

export default WorkAndPride;