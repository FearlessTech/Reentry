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
  height: 180px;
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
      font-size: 95%;
      color: rgb(3, 98, 223);
    }
  }
`;

const HR = styled.div``;
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
  border-radius: 100vmax;
  margin: 1rem;
  .img-wrapper {
    height: 70px;
    border-right: 1px solid black;
    padding-right: 1rem;
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
  /* outline: 1px solid red; */
  display: flex;
  padding: 2% 4%;
  justify-content: space-between;
  .prevMessage {
    a {
      text-decoration: none;
      color: #474747;
    }
  }

  .action {
    /* outline: 1px solid blue; */
    display: flex;
    align-items: flex-start;
    a {
      background-color: aliceblue;
      cursor: pointer;
      padding: 1rem;
      text-decoration: none;
      color: #474747;
    }
  }
`;
const Dots = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
`;

const Right = styled.div`
  width: 25%;
  /* border: 1px solid red; */
  margin: 3% 2%;
  @media (max-width: 623px) {
    width: 95%;
    margin: auto;
  }
`;
const RTopDiv = styled.div`
  background-color: white;
  /* margin-top: -5%; */
  border-radius: 10px;
  padding: 2% 5%;
  text-align: center;
  p {
    color: gray;
  }
`;
const Ads = styled.div`
  display: flex;
  margin-left: 85%;
  p {
    margin-top: 1%;
    font-size: 80%;
    color: gray;
    /* border: 1px solid red; */
  }
`;
const RightImg = styled.div`
  img {
    padding: 1rem;
    border-radius: 100vmax;
    @media (max-width: 623px) {
    }
  }
  border: 1.4px solid rgb(3, 98, 223);
  text-align: center;
  padding: 2% 4%;
  border-radius: 50px;
  /* width: 50%; */
  &:hover {
    cursor: pointer;
    background-color: rgb(215, 233, 248);
  }
`;

export {
  Container,
  Left,
  HR,
  Middle,
  MiddleBoxes,
  MiddleContent,
  Dots,
  Right,
  RTopDiv,
  Ads,
  RightImg,
};
