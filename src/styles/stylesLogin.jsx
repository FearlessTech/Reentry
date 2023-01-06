import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
  @media (max-width: 768px) {
    overflow: scroll;
  }
`;
const Nav = styled.nav`
  height: 95%;
  width: 15%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 5px 5px 15px #0aaaaa;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  background-color: #077a7a;
  transition: ease-in-out 120ms;
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
`;


const NavBTN = styled.button`
  background-color: #f1f1f1;
  border-radius: 100vmax;
  border: none;
  width: 10rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  icon {
    width: 4rem;
    height: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const SectionA = styled.section`
  height: 90vh;
  width: 42vw;
  margin-left: 50%;
  margin-top: 5%;
`;

const SectionB = styled.section`
  height: 90%;
  width: 30vw;
  position: absolute;
  margin-left: 20%;
  margin-top: 5vh;
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
`;

const Close = styled.button`
  display: flex;
  justify-content: center;
  margin-left: 80%;
  margin-top: 1rem;
  background-color: transparent;
  border: none;
`;

export {
  Container,
  SectionA,
  SectionB,
  Form,
  Nav,
  Close,
  NavBTN,
};