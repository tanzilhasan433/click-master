
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="w-1/2 mx-auto" src="https://i.ibb.co/c1yVqKr/5156006-2676383.jpg" alt="" />
            
            <Link className="btn primary-btn mt-5" to='/'>Go to Homepage</Link>
        </div>
    );
};

export default NotFound;