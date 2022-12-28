import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 623px) {
      display: block;
    }
`;
const Left = styled.div`
  width: 18%;
  height: 180px;
  border-radius: 10px;
  background-color: white;
  /* border: 1px solid red; */
  margin: 3% 0 0 5%;
  text-align: center;
  @media (max-width: 623px) {
      display: none;
    }
`;
const LeftDiv = styled.div`
  p {
    font-size: 100%;
    color: gray;
  }
  h1 {
    font-size: 95%;
    color: rgb(3, 98, 223)
  }
`;
const HR = styled.div`
  
`;
const Middle = styled.div`
  width: 44%;
  background-color: white;
  margin: 3% 0 0 2%;
  border-radius: 10px;
  /* border: 1px solid red; */
`;
const MiddleBoxes = styled.div`
  display: flex;
  /* height: 90px; */
  img {
    /* border: 1px solid red; */
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 3% 4%;
  }
  @media (max-width: 623px) {
    width: 95%;
    margin: auto;
  }
`;
const MiddleContent = styled.div`
  width: 70%;
  /* border: 1px solid red; */
  border: 1.4px solid rgb(3, 98, 223);
  text-align: center;
  padding: 2% 4%;
  border-radius: 50px;
  /* width: 50%; */
  button {
    color: rgb(3, 98, 223); 
    h&:hover {
      cursor: pointer;
      background-color: rgb(215, 233, 248);
    }
  }
`;
const Dots = styled.div`
  /* border: 1px solid red; */
  width: 10%;
  img{
    width: 60%;
    &:hover{
      cursor: pointer;
      border-radius: 50px;
      background-color: rgb(211, 211, 211);
    }
  }
  p {
    color: gray;
    font-size: 80%;
    margin-left: 25%;
  }
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
    width: 30%;
    padding: 3%;
    border-radius: 50%;
    @media (max-width: 623px) {
      width: 14%;
      /* border: 1px solid red; */
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
  LeftDiv,
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