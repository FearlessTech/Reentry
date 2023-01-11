import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: auto;
  padding: 1rem;
  &,
  * {
    box-sizing: border-box;
  }
  .picture-wrapper {
    width: 50px;
    img {
      border-radius: 5px;
      width: 100%;
    }
  }
  column-gap: 1rem;

  .comment-container {
    width: 100%;
    display: flex;
    .comment-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      textarea {
        resize: vertical;
        border-radius: 5px;
        min-height: 50px;
        max-height: 200px;
        padding: 1rem;
        background-color: #ffffffb9;
        box-shadow: 0px 0px 2px #009999 inset;
        border: none;
        &:focus,
        &:focus-visible,
        &:focus-within {
          outline: none;
        }
      }
      .button-group {
        padding-top: 0.5rem;
        display: flex;
        justify-content: flex-end;
        margin-top: 5px;
        column-gap: 0.5rem;
        align-items: center;
        .btn {
          border: none;
          &.btn-comment {
            background-color: #009999;
            border-radius: 5px;
            color: #ffffffbe;
            border: none;
            padding: 0.4rem 0.8rem;
            align-items: center;
            &.Mui-disabled {
              background-color: #00999992;
            }
            span {
              height: 0.95rem;
            }
          }
          &.btn-cancel {
            //
          }
        }
      }
    }
  }
`;
export default Container;
