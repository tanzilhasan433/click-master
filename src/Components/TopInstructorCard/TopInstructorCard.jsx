

import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const TopInstructorCard = ({ instructor }) => {
    // eslint-disable-next-line react/prop-types
    const { image, name } = instructor;

    return (
        <div className="text-center">
            <div className="avatar">
                <div className="w-72 rounded-full">

                    <motion.img
                    
                    src={image}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}                    
                    >
                   </motion.img>
                        
                   
                </div>
            </div>
            <p className=" font-semibold text-3xl mb-20">{name}</p>
        </div>
    );
};

export default TopInstructorCard;



