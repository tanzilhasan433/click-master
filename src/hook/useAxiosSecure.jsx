
import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "http://localhost:4000/"
})

const useAxiosSecure = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        //a request interceptor to set token
        axiosSecure.interceptors.request.use(config => {
            //get the access token form local storage
            const token = localStorage.getItem('access-token');
            
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config
        });

        //a response interceptor for response
        axiosSecure.interceptors.response.use(response => {
            return response
        },
            async error => {
                if(error.response && (error.response.status === 401 || error.response.status === 403))  {
                    await logout();
                    navigate('/login')
                }
                return Promise.reject(error);
            }
        )
    },[logout, navigate])

    return [axiosSecure];
};

export default useAxiosSecure;