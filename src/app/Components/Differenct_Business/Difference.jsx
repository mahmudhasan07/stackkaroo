import React from 'react';
import './Difference.css'
import { FaCircleCheck } from "react-icons/fa6";
const Difference = () => {
    return (
        <section id='difference'>
            <div id='difference1'>
                <div id='difference_part1'>
                    <h1>Difference Between Businesses With and Without Websites</h1>
                    <p><FaCircleCheck className='difference_icon'></FaCircleCheck> Having a website opens up a world of possibilities for businesses. It serves as a virtual shop that is always open, allowing a huge opportunity to reach a wider audience and engage with customers online.</p>
                    <p><FaCircleCheck className='difference_icon'></FaCircleCheck>Businesses that do not have a website may appear uncommon in today's digital world,  it's like having a closed shop when potential customers are looking to buy. But it's not all bad news, some businesses manage to develop without having a digital presence.</p>
                </div>
                <div id='difference_part2'>
                    <img src="https://i.ibb.co/pZdVL7x/2d22fd1f7ca5665fe80845a7740f9b4d-jpeg.jpg" alt="" />
                    <h1>“STACKKAROO: Transforming Visions  into Reality..!”</h1>
                </div>
            </div>
            <div id='difference2' >
                <h1>See How We Can Help..!</h1>
                <p className='my-8 text-center font-semibold text-xl tracking-widest'>“Sign up now and discover how we can take your Digital Presence to the next level”</p>
            </div>
        </section>
    );
};

export default Difference;