import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  padding-top: calc(3rem - 5px);
  border: 1px solid green;
  background-color: #c1c1c1;
  border: 1px solid red;
  overflow: scroll;
  &,
  * {
    box-sizing: border-box;
    transition: 120ms ease-in-out;
    font-family: "Inter", sans-serif;
  }
  * ::selection {
    background-color: #077a7a;
    color: #ffffff;
  }
  .wrapper {
    width: 100%;
    min-height: calc(100vh - 3rem + 3px);
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .left-box {
      flex: 1 2 300px;
      padding: 0.6rem;
      margin: 0 auto;
      max-width: 300px;
      .left-content {
        background-color: #ebebeb;
        height: 100%;
        width: 100%;
        position: relative;
        .header-container {
          & ::selection {
            background-color: #ebebeb;
            color: #077a7a;
          }
          &::before {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #077a7a;
            bottom: -10px;
            left: 0;
            transform: rotateY("45deg");
            clip-path: polygon(56% 0, 55% 100%, 3% 51%, 4% 0);
          }
          background-color: #077a7a;
          width: calc(100% + 10px);
          right: 0;
          padding: 0.8rem 1rem;
          display: flex;
          transform: translateX(-10px);
          justify-content: flex-start;
          h1 {
            font-weight: 500;
            font-size: 1.8rem;
            color: #ededed;
            margin-left: 1rem;
          }
        }
        .search-container {
          display: flex;
          padding: 1rem;
          .outline {
            width: 100%;
            input {
              width: 100%;
              text-indent: 1rem;
              &::placeholder {
                font-size: 18px;
                font-weight: 300;
                color: #2e2e2e95;
              }
              height: 40px;
              border: 2px solid #d9d9d9;
              &:focus,
              &:focus-visible,
              &:focus-within {
                outline: none;
                transform: scale(1.01);
              }
            }
          }
        }
        .sections {
          .pending {
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 1rem;
            margin-bottom: 2rem;
            .sections-header-container {
              background-color: #077a7a9e;
              padding: 0.5rem;
              & ::selection {
                background-color: #ebebeb;
                color: #077a7a;
              }
              h1 {
                margin-left: 1rem;
                color: #ffffff;
                letter-spacing: 1.5px;
                font-weight: 400;
              }
            }
            .request-container {
              background-color: #d2d2d2;
              display: flex;
              column-gap: 1rem;
              justify-content: space-between;
              align-items: center;
              padding: 0 1rem;
              .img-wrapper {
                width: 40px;
                img {
                  transform: scale(1.2) translateY(2px);
                  border: 2px solid #18939386;
                  width: 100%;
                  &:hover {
                    transform: scale(1.5) translateY(2px);
                  }
                }
              }
              .name {
                flex: 1 1 0;
                font-size: 12px;
                font-weight: 600;
                color: #1c5c7e;
              }
              .options {
                flex: 0 0 40px;
                display: flex;
                justify-content: space-between;
                .icon {
                  transition: 50ms ease-in-out;
                  width: 18px;
                  height: 18px;
                  &:hover {
                    transform: scale(1.05);
                    opacity: 90%;
                  }
                  &:active {
                    transform: scale(0.98);
                  }
                  &.icon-reject {
                    background-color: white;
                    color: #009999;
                    &:hover {
                      border: 0.2px solid #009999;
                    }
                  }
                  &.icon-accept {
                    background-color: #009999;
                    color: white;
                    &:hover {
                      border: 0.2px solid #ffffff;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .main-panel {
      flex: 6 1 300px;
      padding: 0.6rem;
      .main-content {
        background-color: #ebebeb;
        height: 100%;
        width: 100%;
        .header-container {
          & ::selection {
            background-color: #ebebeb;
            color: #077a7a;
          }
          &::before {
            content: "";
            position: absolute;
            width: 20px;
            height: 20px;
            background-color: #077a7a;
            bottom: -10px;
            left: 0;
            transform: rotateY("45deg");
            clip-path: polygon(56% 0, 55% 100%, 3% 51%, 4% 0);
          }
          background-color: #077a7a;
          width: calc(100% + 10px);
          right: 0;
          padding: 0.8rem 1rem;
          display: flex;
          transform: translateX(-10px);
          justify-content: flex-start;
          h1 {
            font-weight: 500;
            font-size: 1.8rem;
            color: #ededed;
            margin-left: 1rem;
          }
        }
      }
    }
  }
`;
