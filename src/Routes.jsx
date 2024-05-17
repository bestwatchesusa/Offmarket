import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactPage";
import Listing from "pages/Listings";
import UserDashboard from "pages/UserDashboard";
import ListingMapView from "pages/ListingMapView";
import PropertyDetails from "pages/PropertyDetails";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Submit from "pages/Submit";
import Profile from "pages/Dashboard";
import Offer from "pages/Dashboard/Offer";
import Saved from "pages/Dashboard/Saved";

import MultiFamily from "pages/MultiFamily";
import Residential from "pages/Residential";
import SellerFinanc from "pages/SellerFinance";
import SubDeals from "pages/SubDeals";

const ProjectRoutes = () => {
  let element = useRoutes([

    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/multiFamily",
      element: <MultiFamily />,
    },
    {
      path: "/residential",
      element: <Residential />,
    },
    {
      path: "/sellerFinance",
      element: <SellerFinanc />,
    },
    {
      path: "/subDeals",
      element: <SubDeals />,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
    },
    {
      path: "offer",
      element: <Offer />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "listing",
      element: <Listing />,
    },
    {
      path: "user",
      element: <UserDashboard />,
    },
    {
      path: "all",
      element: <ListingMapView />,
    },
    {
      path: "propertydetails/:id",
      element: <PropertyDetails />,
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "signup",
      element: <Signup/>,
    },
    {
      path: "submit",
      element: <Submit/>,
    },
    {
      path: "saved",
      element: <Saved/>,
    },
  ]);

  return element;
};

export default ProjectRoutes;
