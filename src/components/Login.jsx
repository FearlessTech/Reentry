import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router-dom';

import {
  Container,
  Nav,
  Join,
  Guest,
  Section,
  Hero,
  Form,
  Google
} from "../styles/stylesLogin";

const Login = (props) => {
  return (
    <Container>
      { props.user && <Redirect to = '/home' />}
      <Nav>
        <a href="/"><img src="/images/MaineRRLogo.png"  alt="" /></a>
        <div>
          <Join>Join Now</Join>
          <Guest onClick = {<Redirect to = '/home' />} >Guest</Guest>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to the Maine Community Resources Network</h1>
          <img src="/images/Freedom.jpg" alt="" />
        </Hero>

        <Form>
          <Google onClick = {() => props.signIn()}>
            <img src="/images/google.svg" alt="" /> Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);