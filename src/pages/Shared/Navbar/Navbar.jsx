

import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import useSelectedClass from "../../../hook/useSelectedClass";
import useRole from "../../../hook/useRole";


const Navbar = () => {
    const { user, logout } = useAuth();
    const [classes] = useSelectedClass();
    const [role] = useRole();
    
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }
    //navbar options
    const NavItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        {user && <li><Link to="/dashboard/myclasses">Dashboard</Link></li>}

    </>
    return (
        <div className="navbar fixed z-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                        {NavItems}
                    </ul>
                </div>
                <Link className="font-bold inline-flex text-lg items-center gap-2" to="/"><img className="w-10" src="/logo.png" alt="" /> ClickMaster</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label className={`${role !== "student" && "hidden"} btn btn-ghost btn-circle`}>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <Link to="/dashboard/myclasses" className="badge badge-sm bg-orange-500 text-white indicator-item">{classes.length || "0"}</Link>
                    </div>
                </label>
                {
                    user ? <>
                        <label className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>
                        <button onClick={handleLogout} className="btn btn-xs ms-2 -mt-1 primary-btn">Log out</button>
                    </>
                        : <Link to="/login" className="btn primary-btn">Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;