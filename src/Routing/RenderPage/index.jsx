import { lazy } from "react";

import NotFound from "../../components/Fallbacks/NotFound";

import Functionalities from "../../components/Functionalities";

const Navbar = lazy(() => import("../../components/Navbar/Navbar"));

const Login = lazy(() => import("../../pages/Login")); // old agreement
const Welcome = lazy(() => import("../../pages/Welcome")); // old Login
const Home = lazy(() => import("../../pages/Home"));
const Notifications = lazy(() => import("../../pages/Notifications"));
const Network = lazy(() => import("../../pages/Network/index.jsx"));
const Messaging = lazy(() => import("../../pages/Messages"));
const Profile = lazy(() => import("../../pages/Profile"));
const Resources = lazy(() => import("../../pages/Resources/Resources"));
const AboutUs = lazy(() => import("../../pages/About"));

function getPage(page_name) {
  switch (page_name) {
    case "login":
      return Login;

    case "welcome":
      return Welcome;

    case "home":
      return Home;

    case "network":
      return Network;

    case "resources":
      return Resources;

    case "messaging":
      return Messaging;

    case "notifications":
      return Notifications;

    case "profile":
      return Profile;

    case "about":
      return AboutUs;

    case "functionalities":
      return Functionalities;

    default:
      return NotFound;
  }
}

const RenderPage = ({ page = null }) => {
  const Page = getPage(page);

  return (
    <>
      <Navbar />
      <Page />
    </>
  );
};

export default RenderPage;
