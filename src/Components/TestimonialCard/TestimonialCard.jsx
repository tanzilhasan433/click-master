/* eslint-disable react/prop-types */

import { AiOutlineComment } from 'react-icons/ai';

const TestimonialCard = ({ review }) => {
    return (
        <div className=" h-[28rem] shadow-lg p-10 rounded-xl text-center bg-white">
            <p className='p-5 relative left-48 lg:left-36 -top-16 bg-orange-600 text-white text-4xl w-20 rounded-full '><AiOutlineComment /></p>
            <p>{review.review}</p>
            <div className="avatar mt-8 mb-3">
                <div className="w-20 rounded-full">
                    <img src={review.imageURL} alt="" />
                </div>
            </div>
            <h1 className='font-semibold text-lg' >{review.name}</h1>
        </div>
    );
};

export default TestimonialCard;