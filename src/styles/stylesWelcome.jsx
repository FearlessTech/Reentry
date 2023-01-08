import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    overflow: scroll;
  }
`;

const Nav = styled.nav`
  box-shadow: 5px 5px 15px #bef4ff36;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: #009999;
  transition: ease-in-out 120ms;
  &:hover {
    background-color: #00999947;
  }
  .logo {
    transition: ease-in-out 0.15s;
    height: 40px;
    margin-top: 15px;
    img {
      height: 100%;
    }
    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 0px 5px #bebebe73;
    }
  }

  .button-container {
    transition: ease-in-out 0.15s;
    display: flex;
    column-gap: 1rem;
    margin-top: 15px;
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
        transform: scale(1.015);
        box-shadow: 2px 2px 2px #2a3e3e39;
        @media (prefers-color-scheme: dark) {
          box-shadow: 2px 2px 2px #b5b5b539;
        }
      }
    }
  }
`;
const Join = styled.button`
  margin-top: 30px;
`;

const LoginBtn = styled.button`
  margin-top: 30px;
`;

const LoginBtn1 = styled.button`
  border-radius: 100vmax;
  border: none;
  min-width: 6.5rem;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;

  padding: 10px 12px;
  margin-right: 12px;
  cursor: pointer;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  a {
    color: #009999;
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.015);
    box-shadow: 2px 2px 2px #2a3e3e39;
    @media (prefers-color-scheme: dark) {
      box-shadow: 2px 2px 2px #b5b5b539;
    }
  }
`;

const Section = styled.section`
  height: 90%;
  width: 100%;
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

const Close = styled.button`
  display: flex;
  width: 20px;
  justify-content: center;
  margin-left: 80%;
  margin-top: 1rem;
`;

const Hero = styled.div`
  position: relative;
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  * ::selection {
    background-color: #3599998b;
    color: #eee;
  }

  h1 {
    position: absolute;
    color: #009999;
    background-color: #998a001a;
    box-shadow: 0px 0px 5px #994c0029;
    border-radius: 20px;
    margin-top: 22%;
    margin-left: 30%;
    font-family: Prosto One;
    font-size: 42px;
    font-weight: 700;
    letter-spacing: 8px;
    line-height: 60px;
    //span {
    //  font-size: 32px;
    //  font-weight: 300;
    //  letter-spacing: 10px;
    //}
  }
  .assets-container {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -5;
    background: radial-gradient(
      ellipse 50% 90%,
      #fffbe0 5%,
      #fff3a7 20%,
      #dfbaaa 50%,
      #fae2c0 70%,
      #bfddbf
    );
    .chain {
      transition: 400ms cubic-bezier(0.83, 0.81, 0.36, 0.37);
      display: flex;
      align-items: center;
      width: 300px;
      height: min-content;
      position: absolute;
      padding-top: 50px;
      top: 270px;
      left: 0;

      img {
        width: 130%;
      }
    }
    .birds {
      width: 400px;
      height: 100%;
      .bird {
        transition: 400ms cubic-bezier(0.83, 0.81, 0.36, 0.37);
        position: absolute;
        img {
          width: 100%;
        }
        &.bird-12 {
          top: 265px;
          left: 377px;
        }
        &.bird-11 {
          top: 318px;
          left: 377px;
        }
        &.bird-10 {
          top: 275px;
          left: 440px;
        }
        &.bird-09 {
          top: 287px;
          left: 508px;
        }
        &.bird-08 {
          top: 294px;
          left: 595px;
        }
        &.bird-07 {
          top: 215px;
          left: 542px;
        }
        &.bird-06 {
          top: 215px;
          left: 724px;
        }
        &.bird-05 {
          top: 200px;
          left: 806px;
        }
        &.bird-04 {
          top: 167px;
          left: 457px;
        }
        &.bird-03 {
          top: 41px;
          left: 744px;
        }
        &.bird-02 {
          top: 65px;
          left: 925px;
        }
        &.bird-01 {
          top: 10px;
          left: 619px;
        }
      }
    }
  }
`;
export {
  Container,
  Nav,
  Join,
  LoginBtn,
  LoginBtn1,
  Section,
  Hero,
  Form,
  Google,
  Close,
};
