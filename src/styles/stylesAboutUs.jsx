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
  width: 75%;
  margin: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 1.5rem;
    margin: 5px;
  }
  p: {
    font-size: .7rem;
  }
`;

export {
  Container,
  Content,
  Image,
  Info,
};