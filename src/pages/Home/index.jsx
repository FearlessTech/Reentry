import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import Leftside from './partials/LeftSide';
import Main from './partials/Main';
import Rightside from './partials/RightSide';

import EventCalendar from '../../components/EventCalendar';
import { Container, Layout } from './styles';

const Home = (props) => {
  return (
    <Container>
      {(!props.user || !props.user.emailVerified) && <Navigate to='/' />}
      <Layout>
        <Leftside redirect='true'>
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
