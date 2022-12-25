import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  display: flex;
`;

const Messengers = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export {
  Container,
  Messengers,
  Messages
};