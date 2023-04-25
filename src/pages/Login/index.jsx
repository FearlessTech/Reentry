import { connect } from "react-redux";
import { signInAPI } from "../../services/actions";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginForm from "./partials/Login";
import SignUpForm from "./partials/SignUp";
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
  SideBar,
  LoginOption,
} from "./styles";
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
      {props.user && props.user.emailVerified && <Navigate to="/home" />}
      <SideBar className={sideBar ? "open" : ""}>
        <img src="/images/PRAIcon.png" alt="" />
        <LoginOption
          className="button"
          onClick={() => {
            setLogin(false);
          }}
        >
          <ImPen />
          Join Now
        </LoginOption>
        <LoginOption
          className="button"
          onClick={() => {
            setLogin(true);
          }}
        >
          <ImMail3 />
          Email Login
        </LoginOption>
        <LoginOption onClick={() => props.signIn()}>
          <div className="icon">
            <ImGoogle2 />
          </div>
          <span>Google Login</span>
        </LoginOption>
        <LoginOption onClick={() => props.signIn()}>
          <div className="icon">
            <ImFacebook2 />
          </div>
          <span>Facebook Login</span>
        </LoginOption>
        <LoginOption onClick={() => props.signIn()}>
          <div className="icon">
            <ImTwitter />
          </div>
          <span>Twitter Login</span>
        </LoginOption>
        <LoginOption onClick={() => props.signIn()}>
          <div className="icon">
            <ImWindows8 />
          </div>
          <span>Microsoft Login</span>
        </LoginOption>
        <div className="dragger" onClick={(e) => setSideBar(!sideBar)}></div>
      </SideBar>
      <main className={sideBar ? "open" : ""}>
        <SectionB>
          <div>
            <h3>Facebook, Twitter, and Microsoft logins are not active yet</h3>
            <br />
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
