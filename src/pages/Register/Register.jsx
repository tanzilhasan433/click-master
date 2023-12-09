import { Helmet } from "react-helmet-async";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import regImg from "../../assets/register.jpg"
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate();
    const { signup, updateUserProfile, logout } = useAuth();
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const onSubmit = data => {
        signup(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const user = { name: data.name, image: data.photoUrl, email: data.email, gender: data.gender, role: "student" }
                        axios.post('http://localhost:4000/users', user)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'User successfully Registered',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    logout()
                                        .then(() => navigate('/login'))
                                        .catch(err => console.log(err))
                                }
                            })
                    })
            })

            .catch(err => console.log(err.message))
    }
    return (
        <>
            <Helmet>
                <title>ClickMaster | Register</title>
            </Helmet>
            <div className="hero pt-10 min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center ">
                        <div className="w-[500px]">
                            <img src={regImg} alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-center font-bold text-5xl mb-5 text-[#fa6a57]">Register</h2>
                            <div className="grid lg:grid-cols-2 gap-5">
                                {/* name  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name field is required</span>}
                                </div>

                                {/* Photo Url  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" {...register("photoUrl")} placeholder="photoUrl" className="input input-bordered" />

                                </div>

                                {/* Email  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email field is required</span>}
                                </div>

                                {/* Password  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, maxLength: 20, minLength: 6, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/i })} placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less then 20 character</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be greater then 6 character</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have One uppercase ,lowercase, number, special character</p>}
                                </div>

                                {/* Confirm Password */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirmPassword", {
                                        required: true, validate: (value) => value === watch('password')
                                    })} placeholder="Confirm Password" className="input input-bordered" />
                                    {errors.confirmPassword?.type === 'validate' && (
                                        <span className="text-red-500">Passwords do not match</span>
                                    )}
                                </div>

                                {/* Gender  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <label className="label justify-start gap-2 cursor-pointer">
                                            <input type="radio" {...register("gender")} value="male" className="radio checked:bg-[#fa6a57]" />
                                            <span className="label-text">Male</span>
                                        </label>
                                        <label className="label justify-start gap-2 cursor-pointer">
                                            <input type="radio" {...register("gender")} value="female" className="radio checked:bg-[#fa6a57]" />
                                            <span className="label-text">Female</span>
                                        </label>
                                    </div>

                                </div>

                            </div>

                            {/* register  */}
                            <div className="form-control items-center mt-6">
                                <button className="btn primary-btn w-full lg:w-2/3">Register</button>
                            </div>
                            <div className="form-control text-center">
                                <p><small>Already have an account? <Link className="text-orange-600 link" to="/login">Login</Link></small></p>
                            </div>
                        </form>
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

export default Register;