import styled from "styled-components";

export const Container = styled.div`
  padding-top: calc(3rem - 5px);
  border: 1px solid green;
  background-color: #c1c1c1;
  overflow: auto;
  .navbar {
    * ::selection {
      background-color: #ebebeb;
      color: #077a7a;
    }
  }
  &,
  * {
    box-sizing: border-box;
    transition: 120ms ease-in-out;
    font-family: "Inter", sans-serif !important;
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
        box-shadow: 1px 1px 15px #046b6b28;
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
          column-gap: 0.2rem;
          .outline {
            flex: 1 1 1;
            width: 100%;
            input {
              width: 100%;
              text-indent: 1rem;
              font-size: 18px;
              font-weight: 300;
              &::placeholder {
                font-size: 18px;
                font-weight: 300;
                color: #2e2e2e95;
              }
              height: 40px;
              border: 2px solid #0087875d;
              &:focus,
              &:focus-visible,
              &:focus-within {
                outline: none;
                transform: scale(1.01);
              }
            }
          }
          .search-btn {
            width: 40px;
            height: 40px;
            flex: 0 0 40px;
            background-color: #009999;
            border: none;
            &:hover {
              background-color: #008484;
            }
            &:active {
              background-color: #009b9b;
              transform: scale(0.95);
            }
            .icon {
              border: none;
            }
          }
        }
        .sections {
          box-shadow: 0 0 5px #00000036;
          position: relative;
          max-height: 430px;
          overflow-y: scroll;
          .section {
            width: 100%;
            min-height: 100px;
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
              .middle {
                display: flex;
                flex: 1 1 0;
                flex-wrap: wrap;
                flex-direction: column;
                position: relative;
                &:hover {
                  .popup {
                    display: flex;
                  }
                }
                .popup {
                  bottom: 0;
                  left: -50px;
                }
                .status {
                  font-size: 12px;
                  font-weight: 200;
                }
              }
              .popup {
                display: none;
                background-color: #077a7a;
                width: 180px;
                height: 200px;
                position: absolute;
                z-index: 10;
                padding: 0.5rem;
                column-gap: 0.5rem;

                .img-wrapper {
                  flex: 1 0 45px;
                  width: 40px;
                  img {
                    max-width: 40px;
                  }
                }

                .content-wrapper {
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: flex-start;
                  row-gap: 0.4rem;
                  .name {
                    color: #ededed;
                    flex: 0 1 10px;
                  }
                  .bio {
                    flex: 1 1 10px;
                    font-size: 11px;
                    color: #d2d2d2;
                    font-weight: 200;
                    &::selection {
                      background-color: #ebebeb;
                      color: #063939;
                      font-weight: 600;
                    }
                  }
                }
              }

              .name {
                flex: 1 1 0;
                font-size: 12px;
                font-weight: 600;
                color: #1c5c7e;
                position: relative;
                &:hover {
                  .popup {
                    display: flex;
                  }
                }
                .popup {
                  top: 0;
                  left: -50px;
                }
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

                &.received {
                  justify-content: flex-end;
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
        box-shadow: 1px 1px 15px #046b6b28;
        background-color: #ebebeb;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
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
        .content {
          display: flex;
          flex-direction: column;
          row-gap: 1rem;
          .filters {
            min-height: 60px;
            flex: 1 1 1;
            display: flex;
            padding: 0.5rem;
            column-gap: 0.5rem;
            row-gap: 0.5rem;
            flex-wrap: wrap;

            .filter {
              flex: 1 1 19%;
              max-width: 300px;
              margin: 0 auto;
              background-color: #d2d2d2;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 0.5rem;
              .filter-icon-wrapper {
                width: 40px;
                height: 40px;
                display: grid;
                place-items: center;
                & > * {
                  color: #1c5c7e;
                }
              }
              .filter-name {
                color: #1c5c7e;
                font-weight: 500;
                margin: 0 auto;
              }
            }
          }
          .results {
            flex: 1 1 1;
            display: flex;
            flex-wrap: wrap;
            column-gap: 0.5rem;
            row-gap: 0.5rem;
            padding: 0.5rem;
            margin-bottom: 50px;
            .single-user {
              flex: 1 1 400px;
              box-shadow: 0 0 5px #2a2a2a80;
              display: flex;
              padding: 0.4rem 1rem;
              column-gap: 1rem;
              min-height: 100px;
              .pictute-wrapper {
                flex: 1 0 1;
                width: 100px;
                img {
                  width: 100%;
                }
              }
              .text-content {
                width: 100%;
                display: flex;
                flex-direction: column;
                row-gap: 0.5rem;
                .name-wrapper {
                  .name {
                    color: #1c5c7e;
                    font-weight: 600;
                  }
                }
                .bio-wrapper {
                  font-size: 14px;
                  font-weight: 300;
                }
              }
            }
          }
        }
      }
    }
  }
`;
