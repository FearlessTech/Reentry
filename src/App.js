import { connect } from "react-redux";
import { lazy, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
const Resources = lazy(() =>
  import("./components/ResourcesComponents/Resources")
);
const AboutUs = lazy(() => import("./components/AboutUs/AboutUs"));

function App({ getUserAuth }) {
  useEffect(() => {
    getUserAuth();
  }, [getUserAuth]);

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
            <Route path="/functionalities">
              <Navbar />
              <Functionalities />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/home">
              <Navbar />
              <Home />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/resources">
              <Navbar />
              <Resources />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/notifications">
              <Navbar />
              <Notifications />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/network">
              <Navbar />
              <Network />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/messaging">
              <Navbar />
              <Messaging />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/profile">
              <Navbar />
              <Profile />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/aboutus">
              <Navbar />
              <AboutUs />
              {/* <MessagesPupup/> */}
            </Route>
            <Route path="/*">
              <Navbar />
              <NotFound />
              {/* <MessagesPupup/> */}
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
