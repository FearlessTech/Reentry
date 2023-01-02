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
  LoginBtn,
  Section,
  Hero,
  HeroImg,
  HeroBird,
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
          <h1 data-value={3}>Maine Prisoner Reentry<br/><span>Resources Network</span> </h1>
          <HeroImg src='/images/tests/chain.png' data-value="-9" alt=''/>
          <HeroBird src='/images/tests/bird-1.png' data-value="-7" alt=''/>
          <HeroBird src='/images/tests/bird-2.png' data-value="-5" alt=''/>
          <HeroBird src='/images/tests/bird-3.png' data-value="-3" alt=''/>
          <HeroBird src='/images/tests/bird-4.png' data-value="-1" alt=''/>
          <HeroBird src='/images/tests/bird-5.png' data-value="3" alt=''/>
          <HeroBird src='/images/tests/bird-6.png' data-value="1" alt=''/>
          <HeroBird src='/images/tests/bird-7.png' data-value="3" alt=''/>
          <HeroBird src='/images/tests/bird-8.png' data-value="5" alt=''/>
          <HeroBird src='/images/tests/bird-9.png' data-value="7" alt=''/>
          <HeroBird src='/images/tests/bird-10.png' data-value="9" alt=''/>
          <HeroBird src='/images/tests/bird-11.png' data-value="11" alt=''/>
          <HeroBird src='/images/tests/bird-12.png' data-value="13" alt=''/>
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