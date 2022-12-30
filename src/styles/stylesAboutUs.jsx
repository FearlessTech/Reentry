import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  background-color: #CDCDCD;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
`;

const Image = styled.div`
  width: 25%;
`;

const Info = styled.div`
  width: 75%;
`;

export {
  Container,
  Content,
  Image,
  Info,
};