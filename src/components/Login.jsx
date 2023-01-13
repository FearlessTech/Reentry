import { connect } from "react-redux";
import { signInAPI } from "../actions";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginForm from "./LoginComponents/Login";
import SignUpForm from "./LoginComponents/Signup";
import {
  ImFacebook2,
  ImGoogle2,
  ImTwitter,
  ImMail3,
  ImPen,
  ImWindows8,
} from "react-icons/im";

import {
  Container,
  SectionA,
  SectionB,
  Form,
  Nav,
  NavBTN,
} from "../styles/stylesLogin";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [login, setLogin] = useState(true);
  const [show, setShow] = useState(true);
  const [sideBar, setSideBar] = useState(true);
  const Modal = () => {
    return (
      <Form>
        {login ? (
          <LoginForm>
            <span className="sign-up">
              Doesn't have an account?{" "}
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setLogin(false);
                }}
                to="#"
              >
                Sign up
              </Link>
            </span>
          </LoginForm>
        ) : (
          <SignUpForm>
            <span className="log-in">
              Already have an acccount?{" "}
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  setLogin(true);
                }}
                to="#"
              >
                Log In
              </Link>
            </span>
          </SignUpForm>
        )}
      </Form>
    );
  };

  return (
    <Container>
      {props.user && <Redirect to="/home" />}
      <Nav className={sideBar ? "open" : ""}>
        <img src="/images/PRAIcon.png" alt="" />
        <NavBTN
          className="button"
          onClick={() => {
            setLogin(false);
          }}
        >
          <ImPen />
          Join Now
        </NavBTN>
        <NavBTN
          className="button"
          onClick={() => {
            setLogin(true);
          }}
        >
          <ImMail3 />
          Email Login
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className="icon">
            <ImGoogle2 />
          </div>
          <span>Google Login</span>
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className="icon">
            <ImFacebook2 />
          </div>
          <span>Facebook Login</span>
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className="icon">
            <ImTwitter />
          </div>
          <span>Twitter Login</span>
        </NavBTN>
        <NavBTN onClick={() => props.signIn()}>
          <div className="icon">
            <ImWindows8 />
          </div>
          <span>Microsoft Login</span>
        </NavBTN>
        <div className="dragger" onClick={(e) => setSideBar(!sideBar)}></div>
      </Nav>
      <main className={sideBar ? "open" : ""}>
        <SectionB>
          <div>
            <h5>Be cautious on social networking sites.</h5>
            <br />
            <h5>
              Keep personal info personal. Be careful how much personal info you
              provide on social networking sites. The more information you post,
              the easier it may be for someone to use that information to steal
              your identity, access your data, or commit other crimes such as
              stalking.
            </h5>
            <br />
            <h5>
              Protect your computer. Security start with protecting your
              computer. Install Antivirus software. Keep your operating system,
              web browser, and other software current.
            </h5>
            <br />
            <h5>
              Use strong passwords. Make sure that your password is at least
              eight characters long and consists of some combination of letters,
              numbers, and special characters (for example, +, @, #, or $).
            </h5>
          </div>
        </SectionB>
        <SectionA>
          <Modal />
        </SectionA>
      </main>
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
