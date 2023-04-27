import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  background-color: #cdcdcd;
  min-height: 100vh;
`;

const Content = styled.div`
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(220px, 6fr) minmax(0, 10fr) minmax(250px, 8fr);
  grid-gap: 1.2rem;
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export { Container, Content, Layout };
