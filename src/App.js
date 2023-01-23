import { connect } from "react-redux";
import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getUserAuth } from "./actions";
import Loading from "./components/Fallbacks/Loading";
import NotFound from "./components/Fallbacks/NotFound";

import Functionalities from "./components/Functionalities";
import "./App.css";
import "./utilities.css";

import Login from "./components/Welcome";
import AgreementLogin from "./components/Login";
import Navbar from "./components/Navbar";
// import Resources from "./extensions/Resources";
const Home = lazy(() => import("./components/Home"));
// const Resource = lazy(() => import("./extensions/Resource"));
const Notifications = lazy(() => import("./components/Notifications"));
const Network = lazy(() => import("./components/Network/index.jsx"));
const Messaging = lazy(() => import("./components/Messages"));
const Profile = lazy(() => import("./components/Profile"));
const Resources = lazy(() =>
  import("./components/ResourcesComponents/Resources")
);
const AboutUs = lazy(() => import("./components/AboutUs"));

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/agreement">
              <AgreementLogin />
            </Route>
            <Router>
              <Navbar />
              <Switch>
                <Route path="/functionalities">
                  <Functionalities />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/resources">
                  <Resources />
                </Route>
                <Route path="/notifications">
                  <Notifications />
                </Route>
                <Route path="/network">
                  <Network />
                </Route>
                <Route path="/messaging">
                  <Messaging />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/aboutus">
                  <AboutUs />
                </Route>
              </Switch>
            </Router>
            <Route path="/*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </Router>
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
