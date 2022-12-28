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

  hr {
    width: 100%;
  }

  & > .top {
    display: flex;
    padding: 0.1rem;
    & > p {
      font-size: 1.4rem;
      width: 95%;
      margin-top: 0.4rem;
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
    & .subContent {
      margin: 1rem 0 1.5rem;
      display: flex;
      & .leftCon {
        margin: auto 0.2rem;
        & > h4 {
          font-size: 1.2rem;
          &:hover {
            color: #1b7eff;
            text-decoration: underline;
            cursor: pointer;
          }
        }

        .location {
          display: flex;
          padding-left: 1rem;
          padding-right: 1rem;
          align-items: center;
          justify-content: space-between;
          margin: 0.5rem 0 1rem;
          & > .zone {
            font-weight: 600;
          }
        }

        & > span {
          display: block;
        }

        .methods {
          display: flex;
          overflow-y: scroll;
          gap: 0.5rem;
          flex-wrap: wrap;
          ::-webkit-scrollbar {
            height: 0px;
          }
          .method {
            background-color: #1b7eff;
            padding: 0.2rem 0.8rem;
            border-radius: 100vmax;
            color: white;
          }
          & > .freq {
            color: #2196f3;
            background-color: white;
            padding: 0.2rem 0.8rem;
            border-radius: 100vmax;
          }
        }

        .get-notified {
          display: flex;
          padding-top: 1rem;
          cursor: pointer;
          input {
            width: 1rem;
            height: 1rem;
            cursor: pointer;
            margin-right: 0.5rem;
          }
        }
      }

      .rightCon {
        & > img {
          width: 1rem;
          margin: 15%;
          cursor: pointer;
        }
        & > img:hover {
        }
      }
    }
  }

  .bottom {
    display: flex;
    background-color: white;
    flex-direction: column;
    padding: 1rem;
    border-radius: 1rem;
    align-items: flex-end;

    &.leftB {
      width: 85%;
      line-height: 5px;

      h4 {
        margin: 1rem 0;
      }
      h6 {
        margin: 1rem 0;
        & > .learn-more {
          color: #1b7eff;
          display: inline-block;
          margin-top: 1rem;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }

  button {
    border-radius: 50px;
    padding: 1rem 3rem;
    margin: 0.5rem auto;
    background-color: #1b7eff;
    color: white;
    border: none;
    cursor: pointer;
    transition: ease-in-out 0.05s;
    color: #eeeeff;
    &:hover {
      box-shadow: 0px 0px 15px #eeeeff88;
      color: #ffffff;
    }
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
    background-color: #fcf4a3;
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

  @media (max-width: 623px) {
    & > .bottom {
      font-size: 1rem;
      max-width: 280px;
      margin: 0.2rem auto;
    }
    .content {
      & > .subContent {
        flex-direction: column-reverse;
        justify-content: space-between;
        & > .leftCon {
          & > .methods {
            margin: 0 auto;
            width: 100%;
            justify-content: flex-end;
          }
          & > .get-notified {
            align-items: flex-end;
            padding: 1rem;
          }
        }
        & div.rightCon {
          width: 100%;
          display: flex;
          justify-content: end;
          & > img {
            margin: 0.3rem;
          }
        }
      }
    }
  }
  @media (max-width: 1060px) {
    .bottom {
      font-size: 0.9rem;
    }
  }
`;
