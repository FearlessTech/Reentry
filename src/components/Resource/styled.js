import styled from 'styled-components';

export const StyledRightAside = styled.aside`
  width: 25%;
  margin: 2% 0 0 0.5%;

  .RtopBox {
    border-radius: 10px;
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .RTdiv {
    & > h1 {
      font-size: 100%;
      margin-bottom: 1rem;
    }
    & > p {
      font-size: 100%;
      color: #00000090;
    }
  }

  .RBdiv {
    margin-top: 2rem;
    & > p {
      color: rgb(201, 122, 247);
      cursor: pointer;
    }
  }

  .RbottomBox {
    width: 80%;
    margin: auto;
    text-align: center;
    margin-top: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #00000090;

    & > span {
      width: 90%;
      cursor: pointer;
      font-size: 85%;
      color: #00000090;
    }
    .RBlink {
      display: flex;
      column-gap: 1rem;
      align-items: center;
      margin-top: 1rem;
    }

    .RBlink > img {
      width: 25%;
      height: 20%;
      border-radius: 10px;
    }

    .RBlink > p {
      font-size: 80%;
      margin-top: 2.5%;
    }
  }

  @media (max-width: 623px) {
    width: 95%;
    margin: auto;
    .RBlink > img {
      width: 12%;
      height: 25px;
      margin: 2% 0 0 25%;
      /* border: 1px solid red; */
    }
  }
`;

export const StyledMiddleAside = styled.aside`
  /* ........................Middle..................... */

  width: 43%;
  margin: 2%;

  /* .......................middle_T.................... */
  .middleT_div {
    display: flex;
    border-radius: 10px;
    padding: 2% 3%;
    background-color: white;
  }
  .MTcontent {
    font-size: medium;
    width: 88.5%;
    height: 100px;
  }
  .MTcontent > h1 {
    font-size: 100%;
    margin: 3% 0;
  }

  .MTcontent > h3 {
    font-size: 90%;
    margin: 2% 0;
  }

  .MTcontent > h5 {
    font-size: 80%;
    margin: 0%;
    /* border: 1px solid red; */
    color: #00000090;
  }
  .green {
    color: green;
  }

  .clear_button {
    width: 10%;
    height: 10%;
    margin: 2rem;
    background-color: white;
    border: none;
    color: #00000090;
    cursor: pointer;
    /* border: 1px solid red; */
  }
  .clear_button:hover {
    padding: 2%;
    margin: 2% 0 0 0.5%;
    border-radius: 50px;
    background-color: gainsboro;
  }
  /* ................................middle_B.................... */
  .middleM_div {
    background-color: white;
    border-radius: 10px;
    margin-top: 3%;
    padding: 0.2rem;
    & > h2 {
      padding: 1rem 1rem 0.25rem 1rem;
      font-size: 100%;
    }
    & > p {
      padding: 0.5rem 1rem 2rem 1rem;
      font-size: 80%;
      color: #00000090;
    }
  }
  .person-card {
    border-bottom: 1px solid #0362df;
    display: flex;
    cursor: pointer;
    align-items: stretch;
    margin: 2rem 0;
    .person-card-logo {
      width: 200px;
      & > img {
        width: auto;
        margin: 1rem;
      }
    }
    .person-card-info {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 0.5rem;
      & > * {
        margin: 0.2rem 0.5rem;
      }
      & > h3 {
        color: #0362df;
        margin: 0.7rem 0.5rem;
      }
      & > h1:hover {
        text-decoration: underline;
      }

      & > span {
        color: #00000090;
        display: block;
      }

      & > .active_logo {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
        padding: 0.4rem 0;
        & > img {
          width: 40px;
          height: 40px;
        }
        & > span {
          color: #00000090;
          font-weight: 600;
        }
      }
      & > .content_bottom {
        text-align: end;
        padding: 0 1rem;
        & > span {
          color: #00000090;
        }
      }
    }

    .actions-container {
      display: flex;
      width: 15%;
      margin: 0.8rem 0.7rem;

      .actions {
        display: flex;
        width: 100%;
        margin: 0.3rem;
        & > .icon-holder {
          display: grid;
          place-items: center;
          width: 1.5rem;
          height: 1.5rem;
          row-gap: 0.2rem;
          svg {
            &.hide {
              fill: #00000090;
            }
            &.delete {
              fill: #cc0000bb;
            }
          }
        }
        & > .icon-holder:hover {
          background-color: gainsboro;
          border-radius: 50px;
          transform: scale(125%);
        }
      }
    }
  }

  @media (max-width: 623px) {
    width: 95%;
    margin: auto;
  }
`;

export const StyledLeftAside = styled.aside`
  width: 18%;
  margin: 2rem;

  .leftT_box {
    /* border: 1px solid rgb(89, 0, 255); */
    background-color: white;
    border-radius: 10px;
  }

  .L_box {
    display: flex;
    padding: 5%;
    /* border: 1px solid red; */
  }
  .L_logo > img {
    /* border: 1px solid red; */
    width: 20px;
  }

  .L_name {
    /* border: 1px solid red; */
    width: 80%;
    font-size: 90%;

    padding-left: 5%;
    /* margin-left: ; */
  }
  .L_name:hover {
    text-decoration: underline;
  }

  .leftB_box {
    display: flex;
    padding: 3% 19%;
    margin: 5%;
    border: 2px solid rgb(3, 98, 223);
    color: rgb(3, 98, 223);
    border-radius: 50px;
    text-align: center;
    margin: auto;
    margin-top: 10px;
  }
  .leftB_box:hover {
    cursor: pointer;
    background-color: rgb(215, 233, 255);
  }
  .B_name {
    padding-left: 5%;
  }
  .LB_logo > img {
    width: 25px;
  }

  @media (max-width: 623px) {
    display: none;
  }
`;
