import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { signOutAPI } from "../actions";

import { SiGooglemessages } from "react-icons/si";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  IoMdNotifications,
  IoIosHome,
  IoMdPeople,
  IoMdSettings,
  IoMdArrowDropdown,
  IoMdPerson,
  IoMdInformationCircle,
} from "react-icons/io";

import { capitalize } from "@material-ui/core";

import {
  Container,
  Content,
  Logo,
  Nav,
  NavListWrap,
  NavList,
  SignOut,
  User,
  More,
  Dropdown,
} from "../styles/stylesNavbar";
import { SearchResults } from "./Search/SearchResults";

const Navbar = (props) => {
  const topics = [
    { name: "home", Icon: IoIosHome },
    { name: "network", Icon: IoMdPeople },
    { name: "resources", Icon: BsFillBriefcaseFill },
    { name: "messaging", Icon: SiGooglemessages },
    { name: "notifications", Icon: IoMdNotifications },
  ];

  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (window?.location.href) setUrl(window.location.href);
  }, []);

  return (
    <Container>
      <Content>
        <Logo>
          <Link to="/home">
            <img src="/images/PRALgLogo.png" alt="" />
          </Link>
        </Logo>
        <SearchResults />
        <Nav>
          <NavListWrap>
            {topics.map(({ name, Icon }) => {
              return (
                <NavList
                  key={name}
                  className={(url ? url.includes(name) : false) ? "active" : ""}
                >
                  <Link
                    to={`/${name}`}
                    onClick={() => {
                      setUrl(name);
                    }}
                  >
                    <Icon size={18} style={{ fill: "whitesmoke" }} />
                    <span>{capitalize(name)}</span>
                  </Link>
                </NavList>
              );
            })}
            <More>
              <a>
                <IoMdSettings size={18} style={{ fill: "whitesmoke" }} />
                <span>
                  More
                  <IoMdArrowDropdown />
                </span>
              </a>
              <Dropdown>
                <Link
                  to="/profile"
                  className={`dropdown-item ${
                    (url ? url.includes("profile") : false) ? "active" : ""
                  }`}
                  onClick={() => {
                    setUrl("profile");
                  }}
                >
                  <IoMdPerson fill={"#00000099"} />
                  <span>Profile</span>
                </Link>
                <Link
                  to="/aboutus"
                  className={`dropdown-item ${
                    (url ? url.includes("aboutus") : false) ? "active" : ""
                  }`}
                  onClick={() => {
                    setUrl("aboutus");
                  }}
                >
                  <IoMdInformationCircle fill={"#00000099"} />
                  <span>About Us</span>
                </Link>
              </Dropdown>
            </More>
            <User>
              <a>
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>
                  Sign Out <IoMdArrowDropdown />
                </span>
              </a>
              <SignOut onClick={() => props.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
