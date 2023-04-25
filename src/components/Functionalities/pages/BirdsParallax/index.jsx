import { connect } from 'react-redux';
import { signInAPI } from '../../../../services/actions';
import { Navigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

import LoginForm from '../../../../pages/Login/partials/Login';
import SignUpForm from '../../../../pages/Login/partials/SignUp';

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
} from './styles';

import { Link } from 'react-router-dom';

const Login = (props) => {
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // presetElements('bird', preset);
    setListener('bird');
  });

  const Modal = (props) => {
    if (!props.show) {
      return null;
    }

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
          <SignUpForm />
        )}
      </Form>
    );
  };

  return (
    <Container id='parallax'>
      {props.user && <Navigate to='/home' />}
      <Nav>
        <a href='/' className='logo'>
          <img src='/images/PRALgLogo.png' alt='' />
        </a>
        <div className='button-container'>
          <Google className='google-btn' onClick={() => props.signIn()}>
            <div className='icon'>
              <img src='/images/google.svg' alt='' />
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
          <h1>
            Maine Prisoner Reentry
            <br />
            <span>Resources Network</span>{' '}
          </h1>
          <div className='assets-container'>
            <div className='chain' top='270' left='0' speed='3'>
              <img src='/images/tests/chain.png' alt='' />
            </div>
            <div className='birds'>
              <div className='bird bird-01' speed='6' top='10' left='619'>
                <img src='/images/tests/bird-1.png' alt='' />
              </div>
              <div className='bird bird-02' speed='5' top='65' left='925'>
                <img src='/images/tests/bird-2.png' alt='' />
              </div>
              <div className='bird bird-03' speed='6' top='41' left='744'>
                <img src='/images/tests/bird-3.png' alt='' />
              </div>
              <div className='bird bird-04' speed='5' top='167' left='457'>
                <img src='/images/tests/bird-4.png' alt='' />
              </div>
              <div className='bird bird-05' speed='3' top='200' left='806'>
                <img src='/images/tests/bird-5.png' alt='' />
              </div>
              <div className='bird bird-06' speed='4' top='215' left='724'>
                <img src='/images/tests/bird-6.png' alt='' />
              </div>
              <div className='bird bird-07' speed='4' top='215' left='542'>
                <img src='/images/tests/bird-7.png' alt='' />
              </div>
              <div className='bird bird-08' speed='3' top='294' left='595'>
                <img src='/images/tests/bird-8.png' alt='' />
              </div>
              <div className='bird bird-09' speed='2' top='287' left='508'>
                <img src='/images/tests/bird-9.png' alt='' />
              </div>
              <div className='bird bird-10' speed='1' top='275' left='440'>
                <img src='/images/tests/bird-10.png' alt='' />
              </div>
              <div className='bird bird-11' speed='2' top='318' left='377'>
                <img src='/images/tests/bird-11.png' alt='' />
              </div>
              <div className='bird bird-12' speed='1' top='265' left='377'>
                <img src='/images/tests/bird-12.png' alt='' />
              </div>
            </div>
          </div>
        </Hero>
        <Modal show={show} />
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

//                           //                             //

function presetElements(className, lambda) {
  const birds = document.getElementsByClassName(className);
  for (let elm of birds) {
    lambda(elm);
  }
}

function setListener(className) {
  document.addEventListener('mousemove', (e) => {
    const birds = document.getElementsByClassName(className);
    const chain = document.getElementsByClassName('chain')[0];
    moveChain(chain, e);
    for (let elm of birds) {
      move(elm, e);
    }
  });
}

function move(elm, event) {
  const speed = elm.getAttribute('speed');
  const defaultTop = Number(elm.getAttribute('top'));
  const defaultLeft = Number(elm.getAttribute('left'));

  const x = (window.innerWidth - event.pageX * speed) / 100;
  const y = (window.innerHeight - event.pageY * speed) / 100;

  const yValue = defaultTop + y;
  const xValue = defaultLeft + x;

  elm.style.setProperty('top', `${yValue}px`);
  elm.style.setProperty('left', `${xValue}px`);
}

function moveChain(elm, event) {
  const speed = elm.getAttribute('speed');
  const defaultTop = Number(elm.getAttribute('top'));
  const defaultLeft = Number(elm.getAttribute('left'));

  const x = (window.innerWidth - event.pageX * speed) / 100;
  const y = (window.innerHeight - event.pageY * speed) / 100;

  const yValue = defaultTop + y;
  const xValue = defaultLeft + x;

  elm.style.setProperty('top', `${yValue}px`);
  elm.style.setProperty('left', `${xValue > 0 ? 0 : xValue}px`);
}
