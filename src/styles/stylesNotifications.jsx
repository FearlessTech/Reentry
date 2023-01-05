import styled from 'styled-components';

const Container = styled.div`
  background-color: #cdcdcd;
  .container {
    margin: auto;
    margin-top: 1.5rem;
    display: flex;
    max-width: 100rem;
    min-height: 100vh;
    hr {
      width: 100%;
    }
    @media (max-width: 623px) {
      display: block;
    }
  }
`;

const Left = styled.div`
  width: 18%;
  padding: 2rem;
  height: min-content;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 623px) {
    display: none;
  }
  div {
    p {
      font-size: 100%;
      color: gray;
    }
    h1 {
      font-size: 16px;
      a {
        color: #1266d4;
      }
    }
  }
`;

const Middle = styled.div`
  width: 44%;
  background-color: white;
  margin: 0 auto;
  margin-top: 2.5rem;
  border-radius: 10px;
  padding: 1rem;
`;

const MiddleBoxes = styled.div`
  display: flex;
  border-radius: 100vmax 0 0 100vmax;
  margin: 1rem;
  &:hover {
    background-color: #cfcfcf20;
  }
  .img-wrapper {
    height: 70px;
    padding-right: 1rem;
    transition: 100ms ease-in-out;
    position: relative;
    &::before {
      content: '';
      background-color: #3f7d95;
      right: 0;
      height: 100%;
      width: 1px;
      position: absolute;
    }
    &:hover {
      transform: scale(1.03);
      &::before {
        right: initial;
        left: 0;
        width: 0px;
      }
    }
    img {
      height: 100%;
      border-radius: 50%;
    }
  }
  @media (max-width: 623px) {
    width: 95%;
    margin: auto;
  }
`;
const MiddleContent = styled.div`
  width: 70%;
  display: flex;
  padding: 2% 4%;
  justify-content: space-between;
  .prevMessage {
    a {
      text-decoration: none;
      color: #3f7d95;
    }
  }

  .action {
    display: flex;
    align-items: flex-start;
    a {
      background-color: #f0f8ff;
      cursor: pointer;
      padding: 1rem;
      text-decoration: none;
      color: #1d5970;
      &:hover {
        transform: scale(1.01);
        background-color: #f5faff;
      }
    }
  }
`;
const Dots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  .time {
    font-size: 14px;
  }
`;

const Right = styled.div`
  width: 25%;
  margin: 3% 2%;
  @media (max-width: 623px) {
    width: 95%;
    margin: auto;
  }
`;
const RTopDiv = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: .4rem 1rem;
  text-align: center;
  p {
    color: gray;
  }
  button {
    border: none;
    width: 100%;
    padding: 1rem;
    color: #3f7d95;
    background-color: #d3efff;
    &:hover {
    background-color: #c5e6f9;
    }
  }
  .add {
    margin: 2rem 0;
    background-color: #ecf8ff;
    padding: 1rem;
    border-radius: 1rem;
    hr{
      background-color: #3f7d95;
    }
  }
`;
const Ads = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  p {
    margin-top: 1%;
    font-size: 80%;
    color: #959595;
  }
  .options {
    width: 16px;
    color: #757575;
  }
`;

const RightImg = styled.div`
  overflow: hidden;
  padding: 0;
  height: 150px;
  display: grid;
  place-items: center;
  margin: 1rem 0;
  &:hover {
    transform: scale(1.02);
  }
  img {
    width: 100%;
  }
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: rgb(215, 233, 248);
  }
`;

export {
  Container,
  Left,
  Middle,
  MiddleBoxes,
  MiddleContent,
  Dots,
  Right,
  RTopDiv,
  Ads,
  RightImg,
};
