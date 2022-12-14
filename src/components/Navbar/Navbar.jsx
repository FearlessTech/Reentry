import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";

import { FaCaretDown, FaTh, FaEllipsisH } from "react-icons/fa";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";

export const Navbar = () => {
  const [style, setStyle] = useState("link");
  const user = useSelector(selectUser);

  const changeStyle = () => {
    setStyle("afterclick");
  };

  return (
    <div>
      <div className="container">
        <div className="content">
          <Link to="/">
            <img className="logoimg" src="/images/MaineRRLogo.png" alt="" />
          </Link>

          <div className="search">
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <div id="searchicon">
              <img
                src="/images/search-icon.svg"
                alt=""
              />
            </div>
          </div>

          <div className="list">
            <div>
              <Link to="/">
                <a id="one" onClick={changeStyle}>
                  <img src="../images/nav-home.svg" />
                  <span>Home</span>
                </a>
              </Link>
            </div>

            <div>
              <Link to="/network">
                <a id="two">
                  <img src="/images/nav-network.svg" />
                  <span>My Network</span>
                </a>
              </Link>
            </div>

            <div>
              <Link to="/jobs">
                <a id="three">
                  <img src="/images/nav-jobs.svg" />
                  <span>Jobs</span>
                </a>
              </Link>
            </div>
            <div>
              <a id="four">
                <img src="/images/nav-messaging.svg" />
                <span>Messaging</span>
              </a>
            </div>
            <div>
              <Link to="/notifications">
                <a id="five">
                  <img src="/images/nav-notifications.svg" />
                  <span>Notifications</span>
                </a>
              </Link>
            </div>
            <div>
              <a
                id="six"
                onClick={(e) => {
                  firebase.auth().signOut();
                }}
              >
                <img src={user.photoURL} />
                <span>
                  Me
                  <FaCaretDown size="17px" />{" "}
                </span>
              </a>
            </div>
            <div>
              <a id="seven">
                <FaTh size="17px" color="grey" />
                <span>
                  Work <FaCaretDown size="17px" />
                </span>
              </a>
            </div>

            <a id="eight">
              <FaEllipsisH size="17px" color="grey" />
            </a>
            <div id="nine">
              <a>Network Smarter,Try Premium Free</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
