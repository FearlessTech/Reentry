import styled from "styled-components";
const Container = styled.div`
  * {
    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  form {
    height: 100%;
    padding: 2.4rem 0 2rem;
    label {
      margin: 0 auto;
      display: flex;
      position: relative;
      width: max-content;
      overflow: hidden;
      .icon {
        width: 28px;
        height: 28px;
        position: absolute;
        top: 0;
        left: 15px;
        transform: translateY(10px);
        &.active {
          left: unset;
          right: 15px;
          transform: translateY(10px);
        }
      }
      input {
        height: 50px;
        width: 310px;
        padding-left: 3rem;
        border-radius: 5px;
        border: none;
        font-size: 1.2rem;
        color: #1c5c7e;
        ::placeholder {
          color: #1c5c7e;
        }
        box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.203);
        &:focus {
          border-radius: 3px;
          padding: 1rem;
        }
      }
    }
  }
`;

export default Container;
