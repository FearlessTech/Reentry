import { connect } from "react-redux";
import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { getUserAuth } from "./services/actions";

import Loading from "./components/Fallbacks/Loading";
import NotFound from "./components/Fallbacks/NotFound";

import Functionalities from "./components/Functionalities";

import "./App.css";
import "./utilities.css";

const AgreementLogin = lazy(() => import("./pages/Login"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Login = lazy(() => import("./pages/Welcome"));
const Home = lazy(() => import("./pages/Home"));
const Notifications = lazy(() => import("./pages/Notifications"));
const Network = lazy(() => import("./pages/Network/index.jsx"));
const Messaging = lazy(() => import("./pages/Messages"));
const Profile = lazy(() => import("./pages/Profile"));
const Resources = lazy(() => import("./pages/Resources/Resources"));
const AboutUs = lazy(() => import("./pages/About"));

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
