import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  background-color: #CDCDCD;
  //min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 92vh;
  ::-webkit-scrollbar {
    display: none;
`;

const Content = styled.div`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  width: 25%;
  margin: 5px;
  img {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 72%;
  margin: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const AUHeading = styled.div`
  background-color: #077a7a;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 20px;
  color: whitesmoke;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 11px;
    height: 8px;
    background-color: #077a7a;
    left: 0;
    bottom: -7.5px;
    transform: rotateY("45deg");
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 5%);
    position: absolute;
    width: 10px;
    height: 8px;
    background-color: #077a7a;
    left: 0;
    bottom: -8px;
    transform: rotateY("45deg");
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }
  h1 {
    font-size: 1.5rem;
    font-family: 'Sofia'
    margin: 5px;
  }
`;

const Description = styled.div`
  background-color: whitesmoke;
  margin-left: 0.6rem;
  p: {
    font-size: 0.7rem;
    font-family: "Bad Script";
  }
`;
export { Container, Content, Image, Info, AUHeading, Description };
