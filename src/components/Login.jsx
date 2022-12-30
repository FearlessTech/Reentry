import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router-dom';
import { useRef, useState } from 'react';

import LoginForm from './LoginComponents/Login';
import SignUpForm from './LoginComponents/Signup';

import {
  Container,
  Nav,
  Join,
  Guest as LoginBtn,
  Section,
  Hero,
  Form,
  Google,
  Close,
} from '../styles/stylesLogin';
import { Link } from 'react-router-dom';

// /images/google.svg

const Login = (props) => {
  const [show, setShow] = useState(false);

  const hero = useRef('hero-image-container');
  function handleMovement(e) {
    const paralax = hero.current;

    // const heroX = hero.current.offsetWidth;
    // const heroY = hero.current.offsetHeight;

    const middleX = window.innerWidth / 2;
    // const middleY = window.innerHeight / 2;

    const posX = e.clientX;
    // const posY = e.clientY;

    // if (posY < middleY) {
    //   paralax.style.top = '-10px';
    // } else {
    //   paralax.style.top = '10px';
    // }
    if (posX < middleX) {
      paralax.style.left = '-10px';
    } else {
      paralax.style.left = '8px';
    }
  }

  const [login, setLogin] = useState(true);

  const Modal = (props) => {
    if (!props.show) {
      return null;}
      return (
        <Form>
          <Close onClick={() => setShow(false)}>X</Close>
          {login ? (
            <LoginForm>
              <span className='sign-up'>
                Doesn't have an account?{' '}
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    setLogin(false);
                  }}
                >
                  Sign up
                </Link>
              </span>
            </LoginForm>
          ) : (
            <SignUpForm/>
          )}
        </Form>
      )
  };

  return (
    <Container onMouseMove={handleMovement}>
      {props.user && <Redirect to='/home' />}
      <Nav>
        <a href='/' className='logo'>
          <img src='/images/MaineRRLogo.png' alt='' />
        </a>
        <div className='button-container'>
          <Google className='google-btn' onClick={() => props.signIn()}>
            <div className='icon'>
              <img src='/images/google.svg' alt=''/>
            </div>
            <span>Login with Google</span>
          </Google>
          <Join
            className='button'
            onClick={() => {
              setLogin(false);
              setShow(true);
            }}
          >
            Join Now
          </Join>
          <LoginBtn
            className='button'
            onClick={() => {
              setLogin(true);
              setShow(true);
            }}
          >
            Login
          </LoginBtn>
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
        <Modal show={show}/>
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
