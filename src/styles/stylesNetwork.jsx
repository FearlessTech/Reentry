import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  max-height: 100% ;
  display: flex;
`;

const QueryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #e9e9e9;
  height: 85vh;
  margin-right: 20px;
  border-radius: 10px;
`;

const QueryBoxHeader = styled.div`
  display: flex;
  width: 87%;
  height: 10%;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
  border-radius: 10px;
`;

const QueryOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  width: 87%;
  height: 90%;
  background-color: #cdcdcd;
  overflow: scroll;
  border-radius: 10px;
`;

const ShowQueryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #e9e9e9;
  height: 85vh;
  border-radius: 10px;
  
  
`;

const ShowQueryBoxHeader = styled.div`
  display: flex;
  width: 96%;
  height: 10%;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
`;

const QueriedItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px ;
  margin-right: 20px;
  width: 96%;
  height: 90%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
`;

const QueryResult = styled.div`
  margin: 20px;
  width: 96%;
  height: 100px;
  background-color: #88bbd6;
  border-radius: 10px;
  display: flex;
  & > img {
    height: 70px;
    margin: 10px;
    border-radius: 10px;
    
  };
`;

export {
  Container,
  QueryBox,
  QueryBoxHeader,
  QueryOptions,
  ShowQueryBox,
  ShowQueryBoxHeader,
  QueriedItems,
  QueryResult,
};