import styled from "styled-components";

const StyledNotFound = styled.div`
  height: 99vh;
  width: 100%;
  display: flex;
  padding-top: 7rem;
  color: #88bbd6;
  align-items: flex-start;
  justify-content: center;

  .content {
    background-color: white;
    padding: 4rem 2.5rem 2.5rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 2rem;
    min-width: 70vw;
    min-height: 60vh;

    .text-content {
      width: max-content;

      .error {
        font-size: 8rem;
        font-weight: 700;
      }
      .message {
        font-size: 1.5rem;
        color: #5e99b9;
        text-align: end;
      }
    }

    .go-to-home {
      margin: auto;
      margin-top: 5rem;
      text-decoration: none;
      color: white;
      min-width: max-content;
      background-color: #35799e;
      padding: 1.2rem 1.7rem;
      border-radius: 100vmax;
      width: 7rem;
      display: grid;
      place-items: center;
      justify-self: end;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 800px) {
    margin: auto;
    .content {
      padding: 0;
      padding-top: 5rem;
      .text-content {
        width: fit-content;
        margin: auto;
        .error {
          font-size: 4rem;
        }
        .message {
          font-size: 1.2rem;
        }
      }

      .go-to-home {
        margin-top: 0;
        font-size: 1.2rem;
        padding: 1.2rem;
      }
    }
  }
`;

export default StyledNotFound;
