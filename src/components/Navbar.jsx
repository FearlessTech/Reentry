import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { signOutAPI } from '../actions';

import { SiGooglemessages } from "react-icons/si";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoMdNotifications, IoIosHome, IoMdPeople, IoMdSettings, IoMdArrowDropdown, IoMdSearch } from "react-icons/io";


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
  Work
} from '../styles/stylesNavbar';

const Navbar = (props) => {
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
            <NavList >
              <Link to="/home"><IoIosHome size={18} style={{ fill:'#cdcdcd' }} /><span>Home</span></Link>
            </NavList>
            <NavList >
              <Link to="/network"><IoMdPeople size={18} style={{ fill:'#cdcdcd' }} /><span>My Network</span></Link>
            </NavList>
            <NavList >
              <Link to="/resource"><BsFillBriefcaseFill size={18} style={{ fill:'#cdcdcd' }} /><span>Resources</span></Link>
            </NavList>
            <NavList >
              <Link to="/#"><SiGooglemessages size={18} style={{ fill:'#cdcdcd' }} /><span>Messaging</span></Link>
            </NavList>
            <NavList >
              <Link to="/notifications"><IoMdNotifications size={18} style={{ fill:'#cdcdcd' }} /><span>Notifications</span></Link>
            </NavList>

            <User>
              <a>
                { props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                  ) : (
                  <img src="/images/user.svg" alt="" /> )
                }
                <span>Me <IoMdArrowDropdown /></span>
              </a>
              <SignOut onClick = {() => props.signOut()} ><a >Sign Out</a></SignOut>
            </User>
            <Work>
              <a><IoMdSettings size={18} style={{ fill:'#cdcdcd' }}/><span>Work</span></a>
            </Work>
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