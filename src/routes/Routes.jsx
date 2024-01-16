import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorElement from "../component/ErrorElement";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorElement></ErrorElement>,
        element:<Main></Main>,
        children:([
            {
                path:'/',
                element:<Home></Home>
            }
        ])
    }
])