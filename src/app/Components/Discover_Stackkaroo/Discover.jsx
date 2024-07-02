import React from 'react';
import './Discover.css'
import { FaCircleCheck } from "react-icons/fa6";
const Discover = () => {
    return (
        <section id='discover' className='my-10 relative'>
            <div className='bg-black'>
                <img src="https://i.ibb.co/hytKL59/sdgjdsvjksdgkjdsvjksj.jpg" alt="" />
            </div>
            <div id='discover-imgText'>
                <h1>“Just as a ship needs a captain, a business needs a website to navigate in the digital ocean.”</h1>
            </div>
            <div id='discover1'>
                <h1>Discover the Power of Stackkaroo’s Web Development and UI/UX Design to Boost Your Business Leads!</h1>
                <div id='discover1_part1'>
                    <div id='discover1_part11'>
                        <div className='discover1_part11text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck><p>Personalized website designs that reflect business core values and connect with the consumer base</p></div>
                        <div className='discover1_part11text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Crafting landing pages tailored to enhance conversion rates and optimize advertising campaigns</div>
                        <div className='discover1_part11text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Conducting UX/UI audits to enhance digital products, improve user satisfaction, and drive business success</div>
                        <div className='discover1_part11text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Building design systems aligned with your brand's unique needs and goals</div>
                        <div className='discover1_part11text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Creating visually appealing and brand-consistent graphics for website and blog content</div>
                    </div>
                    <div id='discover1_part12'>
                        <div className='discover1_part12text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Delivering exceptional UI/UX design tailored to meet your business's unique needs</div>
                        <div className='discover1_part12text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Aiming to provide an outstanding user experience, attract more visitors, and build a loyal customer base</div>
                        <div className='discover1_part12text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Ensuring design ideas stand out from competitors with a focus on the latest techniques and expertise</div>
                        <div className='discover1_part12text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Providing complete project solutions through clear communication, constant monitoring, and adherence to deadlines</div>
                        <div className='discover1_part12text'> <FaCircleCheck className='discover1_icon'></FaCircleCheck>Discovering the transformative power of excellent UI/UX design to boost your company's success</div>
                    </div>
                </div>
            </div>
            <div id='discover2'>
                <h1>Get Started With Our Development Assessment</h1>
                <p className='my-8 text-center font-semibold text-xl tracking-widest'>“Let our team analyze your current site and suggest improvements”</p>
            </div>
        </section>
    );
};

export default Discover;