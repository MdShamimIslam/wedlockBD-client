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
import UserHome from "../pages/User/UserHome/UserHome";
import GotMarried from "../pages/User/GotMarried/GotMarried";
import SuccessMarried from "../pages/Admin/SuccessMarried/SuccessMarried";
import AdminRoute from "./AdminRoute";

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
        loader: () => fetch("http://localhost:5000/user-stats"),
      },
      {
        path: "/nodata",
        element: <Nodata></Nodata>,
      },
      {
        path: "/alreadyCreate",
        element: <AlreadyCreate></AlreadyCreate>,
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // user route
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "editBio",
        element: <EditBio></EditBio>,
      },
      {
        path: "favoritesBio",
        element: <FavoritesBio></FavoritesBio>,
      },
      {
        path: "myContactRequest",
        element: <MyContactRequest></MyContactRequest>,
      },
      {
        path: "viewBio",
        element: <ViewBio></ViewBio>,
      },
      {
        path: "got-married",
        element: <GotMarried></GotMarried>,
      },
      // admin route
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "approved-contact-request",
        element: (
          <AdminRoute>
            <ApprovedContactRequest></ApprovedContactRequest>
          </AdminRoute>
        ),
      },
      {
        path: "approved-premium",
        element: (
          <AdminRoute>
            <ApprovedPremium></ApprovedPremium>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "success-married",
        element: (
          <AdminRoute>
            <SuccessMarried></SuccessMarried>
          </AdminRoute>
        ),
      },
    ],
  },
]);
