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
import AddBiodata from "../pages/User/AddBiodata/AddBiodata";
import Nodata from "../component/Nodata";
import AlreadyCreate from "../component/AlreadyCreate";
import EditBio from "../pages/User/EditBio/EditBio";
import FavoritesBio from "../pages/User/FavoritesBio/FavoritesBio";
import MyContactRequest from "../pages/User/MyContactRequest/MyContactRequest";
import ViewBio from "../pages/User/ViewBio/ViewBio";
import AdminHome from "../pages/Admin/AdminHome/AdminHome";
import ApprovedContactRequest from "../pages/Admin/ApprovedContactRequest/ApprovedContactRequest";
import ApprovedPremium from "../pages/Admin/ApprovedPremium/ApprovedPremium";
import ManageUsers from "../pages/Admin/ManageUsers/ManageUsers";
import OverView from "../pages/User/OverView/OverView";
import GotMarried from "../pages/User/GotMarried/GotMarried";
import SuccessMarried from "../pages/Admin/SuccessMarried/SuccessMarried";
import AdminRoute from "./AdminRoute";
import CheckoutSuccess from "../pages/CheckoutSuccess/CheckoutSuccess";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement/>,
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/biodatas",
        element: <Biodatas/>,
        loader: () => fetch("http://localhost:5000/user-stats"),
      },
      {
        path: "/nodata",
        element: <Nodata/>,
      },
      {
        path: "/alreadyCreate",
        element: <AlreadyCreate/>,
      },
      {
        path: "/about",
        element: <AboutUs/>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/biodata-details/:id",
        element: (
          <PrivateRoute>
            <BiodataDetails/>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/biodatas/${params.id}`),
      },
      {
        path: "/checkout-success",
        element: (
          <PrivateRoute>
            <CheckoutSuccess/>
          </PrivateRoute>
        ),
      },
    ],
  },

  // login and signup route
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signUp",
    element: <SignUp/>,
  },

  // old dashboard route
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout/>
      </PrivateRoute>
    ),
    children: [
      // user route
      {
        path: "overview",
        element: <OverView/>,
      },
      {
        path: "add-biodata",
        element: (
          <PrivateRoute>
            <AddBiodata/>
          </PrivateRoute>
        ),
      },
      {
        path: "edit-biodata",
        element: <EditBio/>,
      },
      {
        path: "favorites",
        element: <FavoritesBio/>,
      },
      {
        path: "contact-requests",
        element: <MyContactRequest/>,
      },
      {
        path: "view-biodata",
        element: <ViewBio/>,
      },
      {
        path: "got-married",
        element: <GotMarried/>,
      },
      // admin route
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome/>
          </AdminRoute>
        ),
      },
      {
        path: "approved-contact-request",
        element: (
          <AdminRoute>
            <ApprovedContactRequest/>
          </AdminRoute>
        ),
      },
      {
        path: "approved-premium",
        element: (
          <AdminRoute>
            <ApprovedPremium/>
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers/>
          </AdminRoute>
        ),
      },
      {
        path: "success-married",
        element: (
          <AdminRoute>
            <SuccessMarried/>
          </AdminRoute>
        ),
      },
    ],
  },
]);
