import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router';
import { useRef, useState } from 'react';

import LoginForm from './LoginComponents/Login';
import SignUpForm from './LoginComponents/Signup';

import {
  Container,
  Nav,
  Join,
  Guest,
  Section,
  Hero,
  Form,
  Google,
} from '../styles/stylesLogin';

// /images/google.svg

const Login = (props) => {
  const hero = useRef('hero-image-container');
  function handleMovement(e) {
    const paralax = hero.current;
    const posX = e.clientX;
    const posY = e.clientY;

    const middleY = window.innerHeight / 2;
    const middleX = window.innerWidth / 2;

    if (posY < middleY) {
      paralax.style.top = '-10px';
    } else {
      paralax.style.top = '10px';
    }
    if (posX < middleX) {
      paralax.style.left = '-10px';
    } else {
      paralax.style.left = '10px';
    }
  }

  const [option, setOption] = useState(false);

  return (
    <Container onMouseMove={handleMovement}>
      {props.user && <Redirect to='/home' />}
      <Nav>
        <a href='/' className='logo'>
          <img src='/images/MaineRRLogo.png' alt='' />
        </a>
        <div className='button-container'>
          <Join className='button'>Join Now</Join>
          <Guest className='button' onClick={<Redirect to='/home' />}>
            Guest
          </Guest>
        </div>
      </Nav>

      <Section>
        <Hero>
          <div className='text'>
            <h1>Welcome to the Maine Community Resources Network</h1>
          </div>
          <div className='hero-container'>
            <div className='hero-image-container' ref={hero}>
              <img
                src='/images/tests/freedom-nobg.png'
                className='hero-image'
                alt=''
              />
            </div>
          </div>
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <div className='icon'>
              <img src='/images/google.svg' alt='' />
            </div>
              <span>Login with Google</span>
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
