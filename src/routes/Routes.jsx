import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../component/ErrorElement";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Biodatas from "../pages/Biodatas/Biodatas";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import BiodataDetails from "../pages/Biodatas/BiodataDetails";
import AddBiodata from "../pages/AddBiodata/AddBiodata";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorElement></ErrorElement>,
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/biodatas',
                element:<Biodatas></Biodatas>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/biodata-details/:id',
                element:<PrivateRoute><BiodataDetails></BiodataDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/biodatas/${params.id}`)
            },
            {
                path:'/add-biodata',
                element:<PrivateRoute><AddBiodata></AddBiodata></PrivateRoute>
            },
            
        ])
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    }
])