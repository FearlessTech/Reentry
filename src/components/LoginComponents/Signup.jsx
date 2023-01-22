import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

import { setFbUser } from "../../actions";

import StyledSignUp from "./LoginStyles/styledSignup";

export default function SignUpForm({ children }) {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function signup(username, email, password) {
    let user = null;
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        user = auth.currentUser;
        user.sendEmailVerification();
        setTimeout(() => {}, 500);
        alert(
          "In order to proceed with the login, we sent a verification email."
        );
      })
      .then(() => {
        user
          .updateProfile({
            displayName: username,
          })
          .then((payload) => {
            setFbUser(payload.user);
          });
      })
      .catch((e) => {
        alert(e.message);
      });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <StyledSignUp>
      <div className="signin-container">
        <div className="title">Sign Up</div>
        {error && (
          <div className="signUp-alert" style={{ color: "red" }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="username-signup-label" htmlFor="username">
              <span>username</span>
              <input
                type="text"
                id="username"
                ref={usernameRef}
                name="username"
                placeholder="name here"
                autoComplete="username"
                required
              />
            </label>
            <label className="username-signup-label" htmlFor="email">
              <span>email</span>
              <input
                type="email"
                id="email"
                ref={emailRef}
                name="email"
                placeholder="example@email.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="password-signup-label" htmlFor="password">
              <span>password</span>
              <input
                type="password"
                id="password"
                ref={passwordRef}
                name="password"
                placeholder="password"
                autoComplete="password"
                required
              />
            </label>
            <label
              className="password-confirm-signup-label"
              htmlFor="passwordConfirm"
            >
              <span>Confirm password</span>
              <input
                type="password"
                id="password"
                ref={passwordConfirmRef}
                name="password"
                placeholder="password"
                autoComplete="password"
                required
              />
            </label>
          </div>
          <button className="send-form" disabled={loading} type="submit">
            Sign Up
          </button>
        </form>
        <span className="or">or</span>
        {children}
      </div>
    </StyledSignUp>
  );
}
