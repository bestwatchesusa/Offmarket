import React from "react";
import { useRoutes } from "react-router-dom";

import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import AboutUs from "pages/AboutUs";
import ContactUs from "pages/ContactPage";
import Listing from "pages/Listings";
import ListingMapView from "pages/ListingMapView";
import PropertyDetails from "pages/PropertyDetails";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Submit from "pages/Submit";
const ProjectRoutes = () => {
  let element = useRoutes([

    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "aboutus",
      element: <AboutUs />,
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
      path: "listingmapview",
      element: <ListingMapView />,
    },
    {
      path: "propertydetails",
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
  ]);

  return element;
};

export default ProjectRoutes;
