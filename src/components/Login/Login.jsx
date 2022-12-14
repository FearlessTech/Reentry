import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "./login.css";
import { loginUser } from "../Redux/userSlice";
import { auth, provider } from "../../firebase";

import { FcGoogle } from "react-icons/fc";
export const Login = (props) => {
  const [signup, setSignup] = React.useState(false);
  const [name, setName] = React.useState("");
  const [photoUrl, setPhotoUrl] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const signInGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;

        setName(user.displayName);
        setPhotoUrl(user.photoURL);
        setEmail(user.email);
        setPassword(user.uid);
        dispatch(
          loginUser({
            name: user.displayName,
            photoUrl: user.photoURL,
            email: user.email,
            password: user.uid,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const register = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !photoUrl) {
      alert("Please fill all the fields");
      return;
    }
    if (password.length < 6) {
      alert("Password must be atleast 6 characters");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    if (!photoUrl.includes("https://")) {
      alert("Please enter a valid photo url");
      return;
    }
    if (!name.trim()) {
      alert("Please enter a valid name");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            dispatch(
              loginUser({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photoUrl,
              })
            );
          });
      })
      .catch((error) => {
        alert(error.message);
      });

    alert("Successfully registered");
    setName("");
    setEmail("");
    setPassword("");
    setPhotoUrl("");
  };
  const signIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    if (password.length < 6) {
      alert("Password must be atleast 6 characters");
      return;
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          loginUser({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="loginScreen">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
          alt="true"
        />

        {signup === true ? (
          <form onSubmit={register}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Profile Picture URL"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="policy">
              By clicking Agree & Join, you agree to the{" "}
              <span>LinkedIn User Agreement, Privacy Policy,</span> and
              <span> Cookie Policy.</span>
            </p>
            <button className="submitButton">Agree & Join </button>
            <h4>
              Already on Linkedin ?{" "}
              <span onClick={(e) => setSignup(false)}>Sign in</span>
            </h4>
          </form>
        ) : (
          <>
            <form className="loginForm" onSubmit={signIn}>
              <h1>Sign in</h1>
              <p>Stay updated on your professional world</p>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="submitButton">Sign in</button>
              <h4>
                New to Linkedin ?{" "}
                <span onClick={(e) => setSignup(true)}>Join Now</span>
              </h4>
            </form>
            <p>OR</p>
            <div className="googleLogin">
              <Google onClick={signInGoogle}>
                <FcGoogle
                  style={{
                    fontSize: "30px",
                    marginRight: "10px",
                  }}
                />{" "}
                Sign in with Google
              </Google>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  vertical-align: middle;
  z-index: 0;
  cursor: pointer;
  margin: auto;
  margin-left: 10px;
  border: 0;
`;
