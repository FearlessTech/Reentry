import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  &,
  * {
    transition: 120ms ease-in-out;
    &::selection {
      background-color: #0aaaaa;
      color: white;
    }
  }
  @media (max-width: 768px) {
    overflow: scroll;
  }
  main {
    display: flex;
    width: 100%;
    @media (max-width: 650px) {
      margin-top: 5rem;
      flex-direction: column;
    }
  }
`;
const Nav = styled.nav`
  height: 95%;
  width: 250px;
  position: fixed;
  overflow-x: hidden;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 5px 5px 15px #0aaaaa;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: ease-in-out 180ms;
  background-color: #077a7a;
  top: 0;
  left: 0;

  &.open {
    z-index: 1;
    left: -235px;
    top: 0;
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: 0px 0px 2px #afafaf6b;
    background-color: #3c585839;
  }
  &:hover {
    background-color: #0aaaaa;
    @media (prefers-color-scheme: dark) {
      box-shadow: 0px 0px 1px #4848486b;
      background-color: #3c585839;
    }
  }

  .logo {
    transition: ease-in-out 0.15s;
    margin-top: 15px;
    height: 30%;
    width: 30%;
    img {
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 5px #00999973;
    }
  }

  .dragger {
    height: 100%;
    position: absolute;
    width: 1rem;
    background-color: #009999;
    right: 0;
    top: 0;
  }
`;

const NavBTN = styled.button`
  background-color: #f1f1f1;
  border-radius: 100vmax;
  border: none;
  width: 10rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 1rem;
  column-gap: 1rem;
  .icon {
    img {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    transform: scale(1.01);
    cursor: pointer;
    box-shadow: -1px 1px 2px #0aaaaa6e;
  }
`;

const SectionA = styled.section`
  height: 90vh;
  width: 42vw;
  margin-top: 5%;
  @media (max-width: 650px) {
    margin: 1rem auto;
    width: 95%;
    height: min-content;
  }
`;

const SectionB = styled.section`
  height: 90%;
  width: 30vw;
  margin-left: 20%;
  margin-top: 5vh;
  *::selection {
    background-color: #343434;
    color: white;
  }

  @media (max-width: 650px) {
    margin: 1rem auto;
    width: 95%;
    height: min-content;
    & > * {
      margin: auto;
    }
  }
`;

const Form = styled.div`
  width: 50rem;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px #1e1e1e66;
  border-radius: 2rem;
  margin: 1rem 3rem 3rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 3rem;
  @media (prefers-color-scheme: dark) {
    background-color: #aaaaaa33;
    box-shadow: 0px 0px 5px #d5d5d554;
  }
  @media (max-width: 650px) {
    margin: auto;
  }
`;

const Close = styled.button`
  display: flex;
  justify-content: center;
  margin-left: 80%;
  margin-top: 1rem;
  background-color: transparent;
  border: none;
  transition: 100ms ease-in-out;
  .close-icon {
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export { Container, SectionA, SectionB, Form, Nav, Close, NavBTN };
