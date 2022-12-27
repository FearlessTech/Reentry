import styled from 'styled-components';

export const PopupContainer = styled.div`
  border-radius: 10px;
  padding: 0.2rem;
  margin-top: 1rem;
  border: 1px solid #aaaaaa;
  display: flex;
  flex-direction: column;

  .gray {
    color: gray;
  }

  & > .top {
    display: flex;
    & > p {
      font-size: 130%;
      width: 95%;
      margin-top: -0.5%;
    }
    & > img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    & > img:hover {
      cursor: pointer;
      border-radius: 50px;
      background-color: rgb(209, 209, 209);
    }
  }
  .content {
    min-height: 300px;
    overflow-y: scroll;
    & .subContent {
      margin: 1rem 0;
      display: flex;
      max-width: 100%;
      & .leftCon {
        width: 85%;
        & > h4:hover {
          color: rgb(27, 126, 255);
          text-decoration: underline;
          cursor: pointer;
        }
        & > h6 {
          margin: .5rem 0;
          font-weight: 500;
        }
        & > p {
          color: gray;
          line-height: 1rem;
          display: block;
        }
      }

      .rightCon {

        & > img {
          width: 20px;
          margin: 15%;
          height: 20px;
          padding: 10%;
        }
        & > img:hover {
          cursor: pointer;
          border-radius: 50px;
          background-color: rgb(209, 209, 209);
        }
      }
    }
  }

  .bottom {
    display: flex;
    &.leftB {
      width: 85%;
      line-height: 5px;

      h4 {
        margin: 1rem 0;
      }
      h6 {
        margin: 1rem 0;
      }
    }

    span:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  .blue {
    color: rgb(27, 126, 255);
  }

  button {
    border-radius: 50px;
    padding: 7px 20px;
    background-color: rgb(27, 126, 255);
    color: white;
    border: none;
    margin: 0 0 0 84.5%;
    cursor: pointer;
    margin: 0 auto;
  }

  .rightB {
    margin: 3% 0 0 -1%;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.3s;
    }
  }

  input:checked + .slider {
    background-color: green;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
