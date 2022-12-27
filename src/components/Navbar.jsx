import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { signOutAPI } from '../actions';

import { SiGooglemessages } from "react-icons/si";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  IoMdNotifications,
  IoIosHome,
  IoMdPeople,
  IoMdSettings,
  IoMdArrowDropdown,
  IoMdSearch
} from "react-icons/io";
import { capitalize } from '@material-ui/core';


import {
  Container,
  Content,
  Logo,
  Search,
  SearchIcon,
  Nav,
  NavListWrap,
  NavList,
  SignOut,
  User,
  More,
  Dropdown
} from '../styles/stylesNavbar';

const Navbar = (props) => {
  const topics = [
    { name: 'home', Icon: IoIosHome },
    { name: 'network', Icon: IoMdPeople },
    { name: 'resource', Icon: BsFillBriefcaseFill },
    { name: 'messaging', Icon: SiGooglemessages },
    { name: 'notifications', Icon: IoMdNotifications },
  ];

  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (window?.location.href) setUrl(window.location.href);
  }, []);
  return (
    <Container>
      <Content>
        <Logo><Link to="/home"><img src="/images/MaineRRLogo.png" alt="" width="100%"/></Link></Logo>
        <Search>
          <div><input type="text" placeholder="Search" /></div>
          <SearchIcon><IoMdSearch /></SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            {topics.map(({ name, Icon }) => {
              console.log('rendering');
              return (
                <NavList className={(url ? url.includes(name) : false) ? "active" : ""} >
                  <a href={`/${name}`}>
                    <Icon size={18} style={{ fill: '#cdcdcd' }} />
                    <span>{capitalize(name)}</span>
                  </a>
                </NavList>
              );
            })}
            <More>
              <a><IoMdSettings size={18} style={{ fill:'#cdcdcd' }}/><span>More<IoMdArrowDropdown /></span></a>
              <Dropdown>
                <Link to="/profile"><span>Profile</span></Link>
                <Link to="/aboutus"><span>About Us</span></Link>
              </Dropdown>
            </More>
            <User>
              <a>
                { props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                  ) : (
                  <img src="/images/user.svg" alt="" /> )
                }
                <span>Sign Out <IoMdArrowDropdown /></span>
              </a>
              <SignOut onClick = {() => props.signOut()} ><a >Sign Out</a></SignOut>
            </User>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutAPI()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);