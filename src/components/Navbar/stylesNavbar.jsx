import styled from "styled-components";

const Container = styled.div`
  background-color: #009999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  top: 0;
  position: fixed;
  width: 100vw;
  z-index: 100;
  &:hover {
    background-color: #077a7a;
    box-shadow: 0 0 22px #009999;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 100vw;
`;

const Logo = styled.span`
  margin-right: 8px;
  margin-left: 8px;
  font-size: 0px;
  a {
    img {
      width: 15vw;
      @media (max-width: 500px) {
        width: 35vw;
      }
    }
  }
  @media (max-width: 768px) {
    margin-right: 2px;
    margin-left: 2px;
  }
`;

const Search = styled.div`
  width: 100%;
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
      @media (max-width: 500px) {
        width: 150px;
      }
      @media (max-width: 1124px) {
        width: 150px;
      }
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  margin-right: 10px;
  display: block;

  @media (max-width: 500px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #077a7a;
    box-shadow: 0 12px 42px 0 #074453af;
    width: 100vw;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    a:after {
      content: "";
      position: absolute;
      background-color: whitesmoke;
      height: 3px;
      width: 100%;
      left: 0;
      bottom: -5px;
    }
  }
  .dropdown-item.active {
    &:after {
      content: "";
      position: absolute;
      background-color: whitesmoke;
      height: 3px;
      width: 100%;
      left: 0;
      bottom: 0px;
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 88px;
    position: relative;
    text-decoration: none;
    padding: 0 10px;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 500px) {
      min-width: 45px;
      padding: 0 5px;
      font-size: 8px;
    }
    @media (max-width: 1124px) {
      padding: 5px;
      font-size: 8px;
      min-width: 75px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
  @media (max-width: 500px) {
    min-width: 25px;
    padding: 0 2px;
    font-size: 8px;
  }
`;

const SignOut = styled.div`
  cursor: pointer;
  position: absolute;
  top: 48px;
  background: #e9e9e9;
  border-radius: 0 0 5px 5px;
  width: 70px;
  box-shadow: 2px 3px 5px -2px rgba(110, 104, 104, 0.75);
  height: auto;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  @media (max-width: 500px) {
    top: -48px;
    right: 2px;
    width: 60px;
    border-radius: 5px;
  }
`;

const User = styled(NavList)`
  a {
    display: flex;
    flex-direction: column;
    .img-wrapper {
      width: 25px;
      height: 25px;
      border-radius: 100vmax;
      margin-top: 5px;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }

  span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1124px) {
    margin-right: 10px;
  }
`;

const Dropdown = styled.div`
  cursor: pointer;
  position: absolute;
  top: 48px;
  background: #e9e9e9;
  border-radius: 0 0 5px 5px;
  width: auto;
  box-shadow: 2px 3px 5px -2px rgba(110, 104, 104, 0.75);
  height: auto;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 500px) {
      gap: 0.2rem;
    }
  }
  @media (max-width: 500px) {
    top: -100px;
    border-radius: 5px;
  }
`;
const More = styled(NavList)`
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  span {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  &:hover {
    ${Dropdown} {
      align-items: center;
      display: flex;
      flex-direction: column;
    }
  }
`;

export {
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
  Dropdown,
};
