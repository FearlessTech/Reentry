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
            <img
              id=""
              src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/navbar%2Fhome-logo.svg?alt=media&token=4c8fd56b-27c2-4309-9db8-20419b262ae7"
              alt=""
            />
          </Link>

          <div className="search">
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <div id="searchicon">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/navbar%2Fsearch-icon.svg?alt=media&token=e35c871e-f8fc-4266-9a2b-758b26683eb8"
                alt=""
              />
            </div>
          </div>

          <div className="list">
            <div>
              <Link to="/">
                <a id="one" onClick={changeStyle}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/navbar%2Fnav-home.svg?alt=media&token=26214d47-fb1a-47d9-974f-4b72e3a3554c" />
                  <span>Home</span>
                </a>
              </Link>
            </div>

            <div>
              <Link to="/network">
                <a id="two">
                  <img src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/navbar%2Fnav-network.svg?alt=media&token=2b0e6854-0573-4391-b161-58c040c466af" />
                  <span>My Network</span>
                </a>
              </Link>
            </div>

            <div>
              <Link to="/jobs">
                <a id="three">
                  <img src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/navbar%2Fnav-jobs.svg?alt=media&token=42c52930-c50b-4ddf-956b-ba7116712eec" />
                  <span>Jobs</span>
                </a>
              </Link>
            </div>
            <div>
              <a id="four">
                <img src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/navbar%2Fnav-messaging.svg?alt=media&token=5c853846-b68d-4c7e-abfe-3f7162a39709" />
                <span>Messaging</span>
              </a>
            </div>
            <div>
              <Link to="/notifications">
                <a id="five">
                  <img src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/navbar%2Fnav-notifications.svg?alt=media&token=e95f4913-c388-44c9-821a-988b39e2cdd3" />
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
