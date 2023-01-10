import styled from "styled-components";

export const Container = styled.div`
  padding-top: calc(3rem - 5px);
  border: 1px solid green;
  &,
  * {
    box-sizing: border-box;
  }
  .wrapper {
    width: 100%;
    min-height: calc(100vh - 3rem + 3px);
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    .left-box {
      outline: 1px solid blue;
      flex: 0 1 300px;
      .left-content {
      }
    }
    .main-panel {
      outline: 1px solid purple;
      flex: 1 1 300px;
      .main-content {
      }
    }
  }
`;
