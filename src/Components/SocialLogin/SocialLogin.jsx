
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hook/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                const loggedUser = {
                    name: user.displayName, email: user.email, image: user.photoURL,
                    
                }
                console.log(loggedUser);
                //register user to db
                axios.post('http://localhost:4000/users', loggedUser)
                    .then(() => {
                            Swal.fire({
                                icon: 'success',
                                title: 'User successfully Login',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate(from, {replace: true})
                        
                        })
            })
        }

    // 
    return (

            <button onClick={handleGoogleLogin} className="mb-2 btn  rounded-2xl"><FcGoogle className='text-2xl' />Login With Google</button>

        );
    };

    export default SocialLogin;

