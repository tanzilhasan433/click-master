import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.jpg"
import { AiFillEye } from 'react-icons/ai';
import { useState } from "react";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
// import Swal from 'sweetalert2/dist/sweetalert2.js' 

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    // state to manage password visibility
    const [isVisible, setIsVisible] = useState(false);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({

                    icon: 'success',
                    title: 'User successfully Logged in',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .then(err => console.log(err))
    }
    return (
        <>
            <Helmet>
                <title>ClickMaster | Login</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center ">
                        <div className="w-[500px]">
                            <img src={loginImg} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-center font-bold text-5xl mb-5 text-[#fa6a57]">Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type={isVisible ? 'text' : 'password'} {...register("password", { required: true })} placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control items-center mt-6">
                                <button className="btn primary-btn w-full lg:w-2/3">Login</button>
                            </div>
                            <div className="form-control text-center">
                                <p><small>Do not have an account? <Link className="text-orange-600 link" to="/register">Register</Link></small></p>
                            </div>
                        </form>
                        <button onClick={() => setIsVisible(!isVisible)} className="absolute left-80 top-[253px]"><AiFillEye className="text-[#fa6a57] text-lg" /></button>

                        <div className="-mt-5 divider">or</div>
                        <div className="text-center mb-3">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
