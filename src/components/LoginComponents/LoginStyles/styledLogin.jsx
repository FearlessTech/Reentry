import styled from "styled-components";
const StyledLogin = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  row-gap: 1rem;
  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
  .form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      font-weight: 700;
      color: #939393;
      text-transform: uppercase;
      margin: 3rem auto;
      @media (prefers-color-scheme: dark) {
        color: #939393;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      .input-container {
        label {
          display: flex;
          column-gap: 1rem;
          align-items: center;
          span {
            color: #414141aa;
            @media (prefers-color-scheme: dark) {
              color: #939393;
            }
          }
          input {
            border: none;
            padding: 1rem;
            background-color: #f1f1f1;
            border-radius: 100vmax;
            transition: cubic-bezier(0.19, 1, 0.22, 1) 100ms;
            &::placeholder {
              color: #48484881;
            }
            &:focus,
            &:focus-visible,
            &:focus-within {
              outline: none;
              transform: scale(1.1);
              &::placeholder {
                color: transparent;
              }
            }
            &:hover {
              transform: scale(1.1);
              &::placeholder {
                color: #00999981;
              }
            }
          }
        }
      }
      .send-form {
        margin-top: 1rem;
        border: none;
        padding: 1rem;
        width: 100%;
        background-color: #009999;
        color: white;
        font-size: 18px;
        &:hover {
          background-color: #0aaaaa;
          transform: scale(1.01);
        }
        &:active {
          background-color: #077a7a;
          transform: scale(0.98);
        }
      }
    }
  }
  span.or {
    display: block;
    padding: 1rem 0 0;
    text-align: center;
    font-size: 14px;
  }
  .google-btn {
    margin-bottom: 1rem;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 3px #00999981;
    }
    &:active {
      transform: scale(0.98);
    }
  }

  .sign-up {
    font-size: 14px;
    font-weight: 600;
    @media (prefers-color-scheme: dark) {
      color: #c1c1c1;
      a {
        color: #015858;
      }
    }
    a {
      color: #009999;
      font-weight: 300;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        transition: 20ms;
      }
    }
  }
`;

export default StyledLogin;
