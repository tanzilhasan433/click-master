
import { FaUserGraduate } from 'react-icons/fa';
import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const TopClassCard = ({ classItem }) => {

    // eslint-disable-next-line react/prop-types
    const { name, img, instructor, enrolled, price } = classItem;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <motion.img
                    src={img}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
            </figure>
            <p className='font-bold absolute top-2 p-3 left-[300px] text-sm bg-[#fa6a57] badge text-white'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-success text-white">TOP</div>
                </h2>
                <p>{instructor}</p>
                <div className='inline-flex items-center'>
                    <FaUserGraduate className='text-[#fa6a57] me-1' /> {enrolled} Students
                </div>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Course</div>
                    <div className="badge badge-outline">Best</div>
                </div>
            </div>
        </div>
    );
};

export default TopClassCard;

