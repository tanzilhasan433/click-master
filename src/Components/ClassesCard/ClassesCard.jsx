/* eslint-disable react/prop-types */

import { AiFillStar } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import useAuth from "../../hook/useAuth"
import axios from "axios";
import useSelectedClass from "../../hook/useSelectedClass";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import useRole from "../../hook/useRole";

const ClassesCard = ({ classItem }) => {
    const { user } = useAuth();
    const [, refetch] = useSelectedClass();
    const navigate = useNavigate();
    const location = useLocation();
    const [role] = useRole();

    const { _id, name, img, instructor, availableSeats, price } = classItem ;

    const handleSelectClass = () => {
        if (user) {
            const classesItems = { classId: _id, name: name, image: img, instructor: instructor, price: price, email: user.email };
            axios.post('http://localhost:4000/classes/selected', classesItems)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Your Class has been added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            Swal.fire({
                title: 'You must login first',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login!'
            }).then((result) => {
                if (result.isConfirmed) {
                    
                    navigate('/login', { state: { from: location } });
                }
            })
        }



    }
    return (
        <div className={`card w-96 ${availableSeats == 0 ? 'bg-red-200' : 'bg-base-100'} shadow-xl`}>
            <figure className="px-10 pt-10">
                <motion.img
                    src={img}
                    className="rounded-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
            </figure>
            <div className="card-body  ">
                <div className="text-slate-600 text-sm flex gap-5">
                    <span className="flex items-center gap-1"><AiFillStar className="text-orange-600" />4.8</span>
                    <span className="flex items-center gap-1"><FaUsers className="text-orange-600" />{availableSeats} vacancies</span>
                    <span className="flex items-center gap-1"><MdWatchLater className="text-orange-600" />10 days</span>
                </div>
                <h2 className="card-title">{name}</h2>
                <p>{instructor}</p>
                <p className="text-2xl font-semibold text-orange-600">${price}</p>
                <div className="card-actions mt-2">
                    {
                        location.pathname == "/dashboard/enrolled" ? <button className="btn primary-btn" disabled >Enrolled</button>
                        : <button onClick={handleSelectClass} className="btn primary-btn" disabled={availableSeats == 0 || role === "admin" || role === "instructor" && true } >Select</button>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;