import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

import StyledSignUp from "./LoginStyles/styledSignup";

export default function SignUpForm({ children }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  // const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const history = useHistory();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      // navigate("/");
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
          {/* <div className="input-container">
              
          </div> */}
          <div className="input-container">
            <label className="username-signup-label" htmlFor="username">
              <span>username</span>
              <input
                type="text"
                id="username"
                ref={emailRef}
                name="username"
                placeholder="example@email.com"
                autoComplete="username"
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
