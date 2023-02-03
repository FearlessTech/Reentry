import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

import EventCalendar from "../EventCalandar";
import { Container, Layout } from "./stylesHome";
const Home = (props) => {
  return (
    <Container>
      {(!props.user || !props.user.emailVerified) && <Navigate to="/" />}
      <Layout>
        <Leftside redirect="true">
          <EventCalendar />
        </Leftside>
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(Home);
