import { connect } from "react-redux";
import { useEffect, Suspense } from "react";

import { getUserAuth } from "./services/actions";

import Loading from "./components/Fallbacks/Loading";
import Routing from "./Routing/Routes";

import "./styles/App.css";
import "./styles/utilities.css";

function App({ getUserAuth }) {
  useEffect(() => {
    getUserAuth();
  }, [getUserAuth]);

  return (
    <Suspense fallback={<Loading />}>
      <div className="App">
        <Routing />
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
