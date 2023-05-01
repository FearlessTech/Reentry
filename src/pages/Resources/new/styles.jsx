import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  padding-top: 3rem;
  background-color: #cdcdcd;
  .container {
    display: grid;
    grid-template-columns: 370px minmax(250px, 3fr);
    grid-template-rows: auto;
    height: 100%;
    .sidebar {
      background-color: #eeeeee;
      overflow-y: scroll;
    }
    .results {
    }
  }
`;

export default Container;
