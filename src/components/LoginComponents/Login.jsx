import { useRef, useState } from "react";
import StyledLogin from "./LoginStyles/styledLogin";
// import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export default function LoginForm({ children }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const userNameRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <StyledLogin>
      <div className="form-content">
        {error && (
          <div className="login-alert" styles={{ color: "red" }}>
            {error}
          </div>
        )}
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
          {/* <div className="input-container">
          </div> */}

          <div className="input-container">
            <label className="username-login-label" htmlFor="username">
              <span>Email</span>
              <input
                type="text"
                ref={emailRef}
                id="username"
                name="username"
                placeholder="example@email.com"
                autoComplete="username"
                required
              />
            </label>
            <label className="password-login-label" htmlFor="password">
              <span>password</span>
              <input
                type="password"
                id="password"
                name="password"
                ref={passwordRef}
                placeholder="password"
                autoComplete="password"
                required
              />
            </label>
          </div>
          <button className="send-form" type="submit" disabled={loading}>
            Log in
          </button>
        </form>
        <span className="or">or</span>
      </div>
      {children}
    </StyledLogin>
  );
}
