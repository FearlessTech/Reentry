import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  display: flex;
  background-color: #cdcdcd;
  flex-wrap: wrap-reverse;
  column-gap: 2rem;
  row-gap: 2rem;
  padding-top: 52px;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 100vh;
  overflow: auto;
  &,
  * {
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
  }
  &,
  * {
    font-family: Inter, sans-serif;
    box-sizing: border-box;
  }
`;
export default Container;
