import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  background-color: #cdcdcd;
  overflow: hidden;
  flex-wrap: wrap-reverse;
  column-gap: 2rem;
  row-gap: 2rem;
  padding-top: 52px;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    overflow: scroll;
  }
  &,
  * {
    font-family: Inter, sans-serif;
    box-sizing: border-box;
  }
`;

const Messengers = styled.div`
  // //
  flex: 0 1 350px;
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
  height: 85vh;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const MessengersHeader = styled.div`
  display: flex;
  width: 87%;
  height: 10%;
  margin: 20px 20px 0 20px;
  background-color: #009999;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  h2 {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
`;

const ActorsList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0 20px;
  width: 87%;
  height: 90%;
  background-color: #cdcdcd;
  overflow-x: hidden;
  border-radius: 0 0 0 10px;
  margin-bottom: 20px;
  .actors {
    display: flex;
    flex-direction: column;
    row-gap: 0.7rem;
    margin: 0.7rem 0;
  }
`;

const Messages = styled.div`
  // //
  flex: 8 1 250px;
  width: 750px;
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
  height: 85vh;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const MessagesHeader = styled.div`
  display: flex;
  height: 10%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #009999;
  align-items: center;
  padding-left: 1rem;
  h2 {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
`;

const SelectedAct = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: 20px;
  margin-right: 20px;
  height: 65%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-wrap: wrap;
  .messages-node {
    margin-left: 1rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const Reply = styled.div`
  margin: 20px;
  padding: 0.5rem;
  max-width: 100%;
  background-color: #009999;
  border-bottom-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-wrap: wrap;

  form {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    input {
      flex: 8 1 270px;
      height: 75px;
      border: none;
      transition: 100ms ease-in-out;
      padding: 1rem;
      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: none;
        transform: scaleY(1.05);
        transform: scaleX(1.004);
      }
    }

    button {
      flex: 1 1 150px;
      height: 75px;
      border-radius: 10px;
      background-color: #74d4d4;
      font-size: 22px;
      color: #ececec;
      border: none;
      outline: none;
      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: none;
        transform: scaleY(1.05);
        transform: scaleX(1.004);
      }
      &[disabled] {
        background-color: #ffffff38;
      }
    }
  }
`;

const ReplyText = styled.input`
  margin: 10px;
  width: 800px;
  height: 80%;
  background-color: #e9e9e9;
  border-radius: 10px;
`;

export {
  Container,
  Messengers,
  MessengersHeader,
  ActorsList,
  Messages,
  MessagesHeader,
  SelectedAct,
  Reply,
  ReplyText,
};
