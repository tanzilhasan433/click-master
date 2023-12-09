
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../pages/Dashboard/Student/MyClasses/MyClasses"
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Feedback from "../pages/Dashboard/Admin/Feedback/Feedback";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import InstructorClasses from "../pages/Dashboard/Instructor/InstructorClasses/InstructorClasses";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import Enrolled from "../pages/Dashboard/Student/Enrolled/Enrolled";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element:  <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            //user route
            {
                path: "myclasses",
                element:<MyClasses></MyClasses>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            {
                path:"payment/history",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path:"enrolled",
                element: <Enrolled></Enrolled>
            },

            //admin route
            {
                path: "manageclasses",
                element: <ManageClasses></ManageClasses>
            },
            {
                path: "manageusers",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "feedback/:id",
                element: <Feedback></Feedback>
            },

            //instructor route
            {
                path: "addclass",
                element: <AddClass></AddClass>
            },
            {
                path: "instructorsclasses",
                element: <InstructorClasses></InstructorClasses>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);

