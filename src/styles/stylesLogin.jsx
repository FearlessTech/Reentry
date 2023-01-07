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
    margin: 1rem auto;
    flex-wrap: wrap;
    justify-content: center;
    width: 1300px;
    max-width: 100%;
    justify-content: space-around;
    align-items: center;
    height: max-content;
    column-gap: 1rem;
    row-gap: 1rem;

    &:not(.open) {
      padding-left: 255px;
    }
    &.open {
      padding-left: 2rem;
    }

    @media (max-width: 650px) {
      margin: 1rem;
      margin-top: 1rem;
      flex-direction: column;
      padding: 15px;
      transition: 400ms ease-in-out;
      &:not(.open) {
        padding-left: 15px;
      }
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: ease-in-out 180ms;
  background-color: #077a7a;
  box-shadow: 0 12px 42px 0 #074453af;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid #ffffff2d;
  
  top: 0;
  left: 0;

  &.open {
    z-index: 1;
    left: -235px;
    top: 0;
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
  color: #7a7a7a;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 250px;
  & > * {
    max-width: 500px;
  }

  @media (max-width: 650px) {
    max-width: initial;
    width: 100%;
    max-width: 85vw;
    margin: 1rem auto;
    height: min-content;
    & > * {
      width: 100%;
    }
  }
`;

const SectionB = styled.section`
  height: 90%;
  display: flex;
  align-items: center;
  margin-top: 2rem;
  flex: 1 1 350px;
  *::selection {
    background-color: #343434;
    color: white;
  }
  > * {
    max-width: 85vw;
  }

  @media (max-width: 650px) {
    max-width: 100%;
    margin: auto;
    width: 100%;
    height: min-content;
  }
`;

const Form = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px #1e1e1e66;
  border-radius: 2rem;
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
