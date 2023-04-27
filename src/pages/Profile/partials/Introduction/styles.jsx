import styled from "styled-components";
const Container = styled.div`
  .introduction {
    .text {
      display: grid;
      grid-template-columns: 1fr max-content;
      width: 100%;
      form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        gap: 1rem;

        textarea {
          width: 100%;
          resize: vertical;
          min-height: 70px;
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 1rem;
        }

        button {
          border: none;
          background-color: #077a7a;
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 0.4rem;

          :hover {
            background-color: #066e6e;
          }
        }
      }

      .saved-text {
      }
    }
  }
`;

export default Container;
