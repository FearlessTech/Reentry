import { connect } from "react-redux";
import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MessagesPupup from "./components/Messages/MessagesPopup";

import { getUserAuth } from "./actions";
import Loading from "./components/Fallbacks/Loading";
import NotFound from "./components/Fallbacks/NotFound";

import Functionalities from "./components/Functionalities";
import "./App.css";
import "./utilities.css";

import Login from "./components/Login/Welcome";
import AgreementLogin from "./components/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./components/Home/Home"));
const Notifications = lazy(() =>
  import("./components/Notifications/Notifications")
);
const Network = lazy(() => import("./components/Network/index.jsx"));
const Messaging = lazy(() => import("./components/Messages"));
const Profile = lazy(() => import("./components//Profile/Profile"));
const Resources = lazy(() => import("./components/Resources/Resources"));
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));

function App({ getUserAuth }) {
  useEffect(() => {
    getUserAuth();
  }, [getUserAuth]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/agreement" element={<AgreementLogin />} />
            <Route
              path="/functionalities"
              element={
                <>
                  <Navbar />
                  <Functionalities />
                </>
              }
            />
            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <Home />
                </>
              }
            />
            <Route
              path="/resources"
              element={
                <>
                  <Navbar />
                  <Resources />
                </>
              }
            />
            <Route
              path="/notifications"
              element={
                <>
                  <Navbar />
                  <Notifications />
                </>
              }
            />
            <Route
              path="/network"
              element={
                <>
                  <Navbar />
                  <Network />
                </>
              }
            />
            <Route
              path="/messaging/*"
              element={
                <>
                  <Navbar />
                  <Messaging />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Navbar />
                  <Profile />
                </>
              }
            />
            <Route
              path="/aboutus"
              element={
                <>
                  <Navbar />
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/*"
              element={
                <>
                  <Navbar />
                  <NotFound />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
