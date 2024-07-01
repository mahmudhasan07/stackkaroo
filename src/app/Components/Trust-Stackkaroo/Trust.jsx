"use client"
import React from 'react';
import "./Trust.css"
import { FaCircleCheck } from "react-icons/fa6";
const Trust = () => {
    return (
        <section id='trust'>
            <h1 id='trust_head1'>Why Do Businesses Trust Stackkaroo’s Web Development and UI/UX Designs?</h1>
            <p className='trust_text'>Stackkaroo can help you in creating a measurable impact on your target customers. The world is going to change and hence your business should also change. With Stackkaroo you will be able to empower your business to reach new heights.</p>
            <p className='trust_text'>Our low-cost app and website development, UI/UX design, and digital marketing services will significantly accelerate your business, and also set you apart from your competitors.</p>
            <div id='trust2'>
                <div id='trust2_content'>
                    <img id='trust_img' src="https://i.ibb.co/Xs8VKdh/95321b15237b437d5d98f66484afe87e-jpeg.jpg" alt="" />
                </div>
                <div id='trust2_content2'>
                    <div className='trust2_contentDetails'>
                        <FaCircleCheck className='trust_icon' />
                        <div>
                            <h1>Lightening Fast</h1>
                            <p>20 times faster operation than employing in-house developers</p>
                        </div>
                    </div>
                    <div className='trust2_contentDetails'>
                        <FaCircleCheck className='trust_icon' />
                        <div>
                            <h1>Speedy Delivery</h1>
                            <p>70% lower turnaround time for digital assets</p>
                        </div>
                    </div>
                    <div className='trust2_contentDetails'>
                        <FaCircleCheck className='trust_icon' />
                        <div>
                            <h1>Cost-effective</h1>
                            <p>50% reduction in average cost per asset</p>
                        </div>
                    </div>
                    <div className='trust2_contentDetails'>
                        <FaCircleCheck className='trust_icon' />
                        <div>
                            <h1>Customer Satisfaction</h1>
                            <p>Customers rate us 9.5 on average.</p>
                        </div>
                    </div>
                </div>
            </div>
                <div id='trust3'>
                    <h1 className='bg-[]'>Ready to Boost Your Business Online?</h1>
                    <p className='my-5 text-center font-semibold text-xl tracking-widest'>“Claim your strategy session now and learn how we can help you grow”</p>
                </div>
            
        </section>
    );
};

export default Trust;