import { connect } from 'react-redux';
import { signInAPI } from '../actions';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

import LoginForm from './LoginComponents/Login';
import SignUpForm from './LoginComponents/Signup';
import { ImFacebook2, ImGoogle2, ImTwitter, ImMail3, ImPen, ImWindows8 } from "react-icons/im";
import {IoCloseCircle} from "react-icons/io5"


import {
  Container,
  SectionA,
  SectionB,
  Form,
  Nav,
  Close,
  NavBTN,
} from '../styles/stylesLogin';
import { Link } from 'react-router-dom';

// /images/google.svg

const Login = (props) => {
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(true);
  const Modal = (props) => {
    if (!props.show) {
      return null;
    }

    return (
      <Form>
        <Close onClick={() => setShow(false)}>
        <IoCloseCircle size={20} color="#cbcbcb"/>
        </Close>
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
      <Nav>
        <img src='/images/RRLogo.png' alt='' />
        <NavBTN
          className='button'
          onClick={() => {
            setLogin(false);
            setShow(true);
          }}
        >
          <ImPen/>
          Join Now
        </NavBTN>
        <NavBTN
          className='button'
          onClick={() => {
            setLogin(true);
            setShow(true);
          }}
        >
          <ImMail3/>
          Email Login
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className='icon'>
            <ImGoogle2/>
          </div>
          <span>Google Login</span>
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className='icon'>
            <ImFacebook2/>
          </div>
          <span>Facebook Login</span>
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className='icon'>
            <ImTwitter/>
          </div>
          <span>Twitter Login</span>
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className='icon'>
            <ImWindows8/>
          </div>
          <span>Microsoft Login</span>
        </NavBTN>
      </Nav>
      <SectionA>
        <Modal show={show} />
      </SectionA>
      <SectionB>
        <div>
          <h5>
            Be cautious on social networking sites.
          </h5>
            <br />
          <h5>
            Remember: once posted, always posted. Protect your reputation on social networks. What you post online stays
            online. Think twice before posting pictures you wouldn't want your parents or future employers to see.
          </h5>
          <br />
          <h5>
            Build a positive online reputation.
          </h5>
          <br />
          <h5>
            Keep personal info personal. Be careful how much personal info you provide on social networking sites.
            The more information you post, the easier it may be for someone to use that information to steal your
            identity, access your data, or commit other crimes such as stalking.
          </h5>
          <br />
          <h5>
            Protect your computer. Security start with protecting your computer. Install Antivirus software. Keep your
            operating system, web browser, and other software current.
          </h5>
          <br />
          <h5>
            Use strong passwords. Make sure that your password is at least eight characters long and consists of some
            combination of letters, numbers, and special characters (for example, +, @, #, or $).
          </h5>
        </div>
      </SectionB>
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
