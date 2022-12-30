import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: transparent;
  position: relative;
  & ::selection {
    color: white;
    background: #c4640a;
  }
`;

const Nav = styled.nav`
  box-shadow: 5px 5px 15px #bef4ff36;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: #2a3e3e39;
  transition: ease-in-out 120ms;
  border-radius: 2rem;
  &:hover {
    background-color: #00999947;
    border-radius: 3rem;
  }
  .logo {
    transition: ease-in-out 0.15s;
    height: 40px;
    img {
      height: 100%;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 5px #00999973;
    }
  }

  .button-container {
    transition: ease-in-out 0.15s;
    display: flex;
    column-gap: 1rem;
    .button {
      border-radius: 100vmax;
      border: none;
      min-width: 6.5rem;
      font-weight: 600;
      font-size: 16px;
      text-decoration: none;
      color: #009999;
      padding: 10px 12px;
      margin-right: 12px;
      cursor: pointer;
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &:hover {
        transform: scale(1.01);
        box-shadow: 2px 2px 2px #2a3e3e39;
      }
    }
  }
`;

const Join = styled.button``;

const Guest = styled.button``;
// hero
const Hero = styled.div`
  @keyframes freedom {
    from {
      top: -7px;
    }
    to {
      top: 7px;
    }
  }

  margin-top: 8rem;
  .text {
    font-size: 3.5rem;
    padding: 3rem;
    color: #009999;
  }

  .hero-container {
    position: absolute;
    top: 0;
    left: -10px;
    z-index: -1;
    width: 100vw;
    min-height: 100vh;
    background-color: #7ff0ff;
  }

  .hero-image-container {
    position: absolute;
    animation: freedom 990ms ease-in-out infinite alternate;
    max-width: 500px;
    max-height: 500px;
    transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) 300ms;
    .hero-image {
      width: 100%;
    }
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: end;
  height: 100%;
  padding-top: 5rem;
`;

const Form = styled.div`
  width: 50rem;
  max-width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px #1e1e1e66;
  margin: 3rem;
  border-radius: 2rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
`;

const Google = styled.button`
  background-color: #f1f1f1;
  border-radius: 100vmax;
  border: none;
  width: 15rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  .icon {
    width: 2rem;
    height: 2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export { Container, Nav, Join, Guest, Section, Hero, Form, Google };
