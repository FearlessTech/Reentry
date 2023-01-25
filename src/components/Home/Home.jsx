import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Leftside from "./Leftside";
import Main from "./Main";
import Rightside from "./Rightside";

import { Container, Layout } from "./stylesHome";

const Home = (props) => {
  return (
    <Container>
      {(!props.user || !props.user.emailVerified) && <Redirect to="/" />}
      <Layout>
        <Leftside />
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
