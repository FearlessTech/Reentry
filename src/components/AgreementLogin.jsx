import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LoginForm from './LoginComponents/Login';
import SignUpForm from './LoginComponents/Signup';

import {
  Container,
  Join,
  LoginBtn,
  Section,
  Form,
  Google,
  Close,
} from '../styles/stylesLogin';
import { Link } from 'react-router-dom';

// /images/google.svg

const Login = (props) => {
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(false);
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
    <Container>
      {props.user && <Redirect to='/home' />}
      <Section>
        <a href='/' className='logo'>
          <img src='/images/MaineRRLogo.png' alt='' />
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
