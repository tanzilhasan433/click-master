
import { Link, Outlet } from "react-router-dom";
import { FaBookReader, FaHistory, FaUserCog } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoWalletSharp } from "react-icons/io5";
import { MdOutlineClass } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BiChalkboard } from "react-icons/bi";
import useRole from "../hook/useRole";
import { AiFillHome } from "react-icons/ai";
import useAuth from "../hook/useAuth";

const Dashboard = () => {
    const {user} = useAuth();
    
    
    const [role] = useRole();
    // const role = 'student'
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-row-reverse lg:flex-col">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-ghost btn-sm drawer-button lg:hidden"><GiHamburgerMenu /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <div className="text-center mb-5">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={user?.photoURL} alt="photoURL"/>                                
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold">{user?.displayName}</h2>
                        <h5 className="text-lg">{role}</h5>
                    </div>
                    <li><Link to="/"><AiFillHome className="text-lg" />Return Home</Link></li>
                    {
                        role === "student" && <>
                            <li><Link to="/dashboard/myclasses"><MdOutlineClass className="text-lg" />My Selected Classes</Link></li>
                            <li><Link to="/dashboard/enrolled">< FaBookReader className="text-base" /> My Enrolled Classes</Link></li>
                            <li><Link to="/dashboard/payment"><IoWalletSharp className="text-base" /> Make Payment</Link></li>
                            <li><Link to="/dashboard/payment/history"><FaHistory className="text-base" /> Payment History</Link></li>
                        </>
                    }
                    {
                        role === "admin" && <>
                            <li><Link to="/dashboard/manageclasses"><FiEdit className="text-lg" />Manage Classes</Link></li>
                            <li><Link to="/dashboard/manageusers"><FaUserCog className="text-lg" />Manage Users</Link></li>
                        </>
                    }
                    {
                        role === "instructor" && <>
                            <li><Link to="/dashboard/addclass"><FiEdit className="text-lg" />Add a Class</Link></li>
                            <li><Link to="/dashboard/instructorsclasses"><BiChalkboard className="text-lg" />My Classes</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;



