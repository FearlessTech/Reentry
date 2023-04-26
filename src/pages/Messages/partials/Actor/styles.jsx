import styled from "styled-components";

const Container = styled.div`
  a {
    display: flex;
    column-gap: 1rem;
    align-items: flex-start;
    padding-top: 0.2rem;
    background-color: #d5d5d5;
    padding: 0.2rem 0.8rem;
    text-decoration: none;
    .image-wrapper {
      width: 60px;
      overflow: hidden;
      border-radius: 100vmax;
      display: grid;
      place-items: center;
      img {
        width: 100%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      row-gap: 0.2rem;
      .name {
        font-size: 14px;
        font-weight: 600;
        color: #074453;
      }
      .last {
        span {
          font-size: 12px;
          color: #545454;
        }
      }
    }
  }
`;

export default Container;
