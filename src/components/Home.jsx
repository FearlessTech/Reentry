import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Leftside from './Leftside';
import Main from './Main';
import Rightside from './Rightside';

import { IoClose } from 'react-icons/io5';

import { Container, Section, Layout } from '../styles/stylesHome';

const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to='/' />}
      <Section>
        <h5>
          <a> Looking for resources? - </a>
          <p> Find resources in record time with Maine's Reentry Resources!</p>
        </h5>
        <IoClose
          className='close'
          size={18}
          onClick={(e) => {
            e.target.parentNode.remove();
          }}
        />
      </Section>
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
