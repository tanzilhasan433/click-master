

import img12 from '../../../assets/images/img12.jpg';
import img11 from '../../../assets/images/img11.jpg';
import { BsArrowRight } from 'react-icons/bs';
import './About.css'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img12} className="max-w-sm rounded-lg shadow-2xl" />
                <img src={img11} className="w-48 rounded-lg shadow-2xl" />
                <p className='px-10 py-5 text-center bg-orange-600 font-bold text-white rounded-lg shadow-2xl relative -left-72 -bottom-44'><span className='text-5xl font-bold'>10</span> <br />Years of <br /> Experience</p>
                <div>
                    <p className='text-orange-600 font-semibold'>About our School</p>
                    <h1 className="text-5xl font-bold">Online Graduate School
                        for Adults & Children</h1>
                    <p className="py-6">Sed risus augue, commodo ornare felis non, eleifend molestie metus. Donec nec purus porttitor, ultrices diam id, laoreet mi. Aenean sit amet enim quis massa pharetra eleifend.</p>
                    <ul className='about font-semibold'>
                        <li className='mb-3'>Flexible training programs</li>
                        <li className='mb-3'>Experienced teachers</li>
                        <li>Free incoming lessons</li>
                    </ul>
                    <button className="btn primary-btn">Read More <BsArrowRight className='text-xl'/></button>
                </div>
            </div>
        </div>
    );
};

export default About;