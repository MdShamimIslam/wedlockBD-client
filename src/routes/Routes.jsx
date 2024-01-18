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
import ContactRequest from "../pages/ContactRequest/ContactRequest";
import Nodata from "../component/Nodata";
import AlreadyCreate from "../component/AlreadyCreate";
import Dashboard from "../Layout/Dashboard";
import EditBio from "../pages/User/EditBio/EditBio";
import FavoritesBio from "../pages/User/FavoritesBio/FavoritesBio";
import MyContactRequest from "../pages/User/MyContactRequest/MyContactRequest";
import ViewBio from "../pages/User/ViewBio/ViewBio";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import ApprovedContactRequest from "../pages/Admin/ApprovedContactRequest/ApprovedContactRequest";
import ApprovedPremium from "../pages/Admin/ApprovedPremium/ApprovedPremium";
import ManageUsers from "../pages/Admin/ManageUsers/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/biodatas",
        element: <Biodatas></Biodatas>,
      },
      {
        path: "/nodata",
        element: <Nodata></Nodata>
      },
      {
        path: "/alreadyCreate",
        element: <AlreadyCreate></AlreadyCreate>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/biodata-details/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails></BiodataDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodatas/${params.id}`),
      },
      {
        path: "/contact-request/:id",
        element: <ContactRequest></ContactRequest>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodatas/${params.id}`),
      },
      {
        path: "/add-biodata",
        element: (
          <PrivateRoute>
            <AddBiodata></AddBiodata>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      // user route
      {
        path:'editBio',
        element:<EditBio></EditBio>
      },
      {
        path:'favoritesBio',
        element:<FavoritesBio></FavoritesBio>
      },
      {
        path:'myContactRequest',
        element:<MyContactRequest></MyContactRequest>
      },
      {
        path:'viewBio',
        element:<ViewBio></ViewBio>
      },
      // admin route
      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'approved-contact-request',
        element:<ApprovedContactRequest></ApprovedContactRequest>
      },
      {
        path:'approved-premium',
        element:<ApprovedPremium></ApprovedPremium>
      },
      {
        path:'manage-users',
        element:<ManageUsers></ManageUsers>
      },
    ]
  }
]);
