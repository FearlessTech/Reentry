import styled from "styled-components";

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background-color: whitesmoke;
  width: 56%;
  border-radius: 10px;
  padding: 1%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4%;
  border: 1px solid rgb(201, 201, 201);
  height: 85%;
  overflow-y: scroll;
  overflow-x: hidden;
  button {
    border-radius: 50px;
    padding: 7px 20px;
    background-color: rgb(27, 126, 255);
    color: white;
    border: none;
    margin: 0 0 0 84.5%;
    cursor: pointer;
  }
`;

const Top = styled.div`
  display: flex;
  p {
    font-size: 130%;
    /* border: 1px solid red; */
    width: 95%;
    margin-top: -0.5%;
  }
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    /* margin: 0 0 0 85%; */
    hover {
      cursor: pointer;
      border-radius: 50px;
      background-color: rgb(209, 209, 209);
    }
  }
`;
const Content = styled.div`
  min-height: 100px;
  background-color: whitesmoke;
  margin-left: 40px;
  overflow-y: scroll;
  /* border: 1px solid blue; */
`;

const RPUHeading = styled.div`
  background-color: #077a7a;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 20px;
  color: whitesmoke;
`;

const OrgInfo = styled.div`
  img {
    width: 20%;
  }
`;

const ResourceDescription = styled.div``;

const ResourcesCheckBoxes = styled.div``;

export {
  Popup,
  Top,
  Content,
  RPUHeading,
  OrgInfo,
  ResourceDescription,
  ResourcesCheckBoxes,
};
