import styled from "styled-components";
import CloseSquared from "../FearlessIcons/CloseSquare.jsx";

const Container = styled.div`
  // temporary
  height: 350px;
  width: 275px;
  background-color: #dbdbdb;
  position: fixed;
  bottom: 0;
  right: 2rem;
  font-family: Inter;
  &,
  * {
    box-sizing: border-box;
  }
  .header {
    padding: 0.55rem 1rem;
    width: 100%;
    text-align: center;
    background-color: #009999;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close-btn {
      margin-top: 5px;
    }
  }
`;

export default function MessagesPupup(props) {
  return (
    <Container className="container">
      <div className="header">
        <span className="text">Messages</span>
        <CloseSquared className="close-btn" />
      </div>
    </Container>
  );
}
