import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import HomeSidebar from "./partials/Sidebar";
import Main from "./partials/Main";
import Rightside from "./partials/RightSide";

import EventCalendar from "../../components/EventCalendar";
import { Container, Layout } from "./styles";

const Home = (props) => {
  return (
    <Container>
      {(!props.user || !props.user.emailVerified) && <Navigate to="/" />}
      <Layout>
        <HomeSidebar redirect="true">
          <EventCalendar />
        </HomeSidebar>
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
