# This is a collaborators only file. It's not meant to be read by the public.
It's a place to put notes and ideas that are too early to be in the public docs.
Please leave the date and your github handle in the notes so other collaborators can discuss the ideas with you.
You can leave messages here for yourself and others or inline with the code in the comments.

:1/1/23 4-Leafs-Code: The first two files are what is currently displayed for showcase purposes. The second two files
are what I am working on. There is a bug in the second two files and once it is found we will have user to user private
direct messaging. If you want to help me bug hunt, please copy the second two files into your own branch and test them.
Update the code with inline comments of your thought, theories, and findings. Then copy and paste it back into the
second two file spaces. Please leave a note under this one to let me know you worked on this so I can check it out.
Thank you for your time and all of your help.

Youtube video: Awesome Parallax Mousemove Effect | Moving Background Objects On Mousemove - HTML, CSS & Javascript
Link: https://www.youtube.com/watch?v=ntg6tbGxP3k
:1/1/23 4-Leafs-Code: This is the video I used to create the parallax effect. I am not sure if the problem is the 
difference between javascript and react js or if it is a style being passed into the component but all of the birds stay 
stacked in the corner instead of moving to their positions. Once they are in the correct positions, the parallax or 
rellax can be applied to make the birds listen to the mouse movement and fly further away from the chain. 

This is Ronnie018 "fun project" and you can discuss it with us here: 
https://github.com/4-Leafs-Code/Reentry/discussions/112

---
## Placeholder Login Currently Active:

### Login.jsx  COPY ONLY DO NOT PASTE OVER THIS FILE 
```jsx
// Building at this moment. Please check back later.
```

### stylesLogin.jsx  COPY ONLY DO NOT PASTE OVER THIS FILE 
```jsx
// Building at this moment. Please check back later.
```
---

## New Login Work In Progress:

### Login.jsx
Copy this file and paste it into your own branch to test it. Make inline comments and paste them back into this file.

```jsx
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

```

### stylesLogin.jsx
Copy this file and paste it into your own branch to test it. Make inline comments and paste them back into this file.

```jsx
import styled from 'styled-components';

const Container = styled.div`
  //padding: 2rem;
  height: 100vh;
  background-size: cover;
  background: radial-gradient(
          ellipse 50% 90%,
          #FFFBE0 5%,
          #FFF3A7 20%,
          #DFBAAA 50%,
          #FAE2C0 70%,
          #BFDDBF
  );
  //display: block;
  //& ::selection {
  //  color: white;
  //  background: #c4640a;
  //}
  //@media (prefers-color-scheme: dark) {
  //  background-color: #3c585839;
  //  & ::selection {
  //    color: #3b3b3b;
  //    background-color: #009999;
  //  }
  }
`;

const Nav = styled.nav`
  box-shadow: 5px 5px 15px #bef4ff36;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: #2a3e3e39;
  transition: ease-in-out 120ms;
  border-radius: 2rem;
  @media (prefers-color-scheme: dark) {
    box-shadow: 0px 0px 2px #afafaf6b;
    background-color: #3c585839;
  }
  &:hover {
    background-color: #00999947;
    border-radius: 3rem;
    @media (prefers-color-scheme: dark) {
      box-shadow: 0px 0px 1px #4848486b;
      background-color: #3c585839;
    }
  }
  .logo {
    transition: ease-in-out 0.15s;
    height: 40px;
    img {
      height: 100%;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 5px #00999973;
    }
  }

  .button-container {
    transition: ease-in-out 0.15s;
    display: flex;
    column-gap: 1rem;
    .button {
      border-radius: 100vmax;
      border: none;
      min-width: 6.5rem;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      color: #009999;
      padding: 10px 12px;
      margin-right: 12px;
      cursor: pointer;
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &:hover {
        transform: scale(1.015);
        box-shadow: 2px 2px 2px #2a3e3e39;
        @media (prefers-color-scheme: dark) {
          box-shadow: 2px 2px 2px #b5b5b539;
        }
      }
    }
  }
`;
const Join = styled.button``;
const LoginBtn = styled.button``;

const Hero = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  //top: 0;
  //left: -10px;
  //z-index: -1;
  //min-height: 100vh;
  //@media (prefers-color-scheme: dark) {
  //  background-color: #222222;
  //}
  
  //@keyframes freedom {
  //  from {
  //    top: -7px;
  //  }
  //  to {
  //    top: 7px;
  //  }
  //}

  //margin-top: 8rem;
  //.text {
  //  font-size: 3.5rem;
  //  padding: 3rem;
  //  color: #009999;
  //}
  
  h1 {
    z-index: 1;
    position: absolute;
    color: #fff;
    font-size: 50px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: 60px;
    span {
      font-size: 32px;
      font-weight: 300;
      letter-spacing: 10px;
    }
  }
`;
const HeroImg = styled.img`
  position: absolute;
  width: 40%;
  height: 40%;
  top: 0;
  left: 0;
  object-fit: contain;
`;
const HeroBird = styled.img`
  position: absolute;
  width: 15%;
  height: 15%;
  top: 0;
  left: 0;
  object-fit: contain;
`;

const Section = styled.section`
  //display: flex;
  //justify-content: end;
  height: 90%;
  width: 100%;
  //padding-top: 2rem;
`;

const Form = styled.div`
  width: 50rem;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px #1e1e1e66;
  border-radius: 2rem;
  margin: 1rem 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 3rem;
  @media (prefers-color-scheme: dark) {
    background-color: #aaaaaa33;
    box-shadow: 0px 0px 5px #d5d5d554;
  }
`;

const Google = styled.button`
  background-color: #f1f1f1;
  border-radius: 100vmax;
  border: none;
  width: 15rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  .icon {
    width: 2rem;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Close = styled.button`
  display: flex;
  width: 20px;
  justify-content: center;
  margin-left: 80%;
  margin-top: 1rem;
`;
export { Container, Nav, Join, LoginBtn, Section, Hero, HeroImg, HeroBird, Form, Google, Close };

```