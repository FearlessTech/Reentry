import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 92vh;
  ::-webkit-scrollbar {
    display: none;
  }
  * {
    transition: 0ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

const Content = styled.div`
  max-width: 1220px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    .image {
      width: 100%;
      img {
        opacity: 33%;
      }
    }
    &:hover {
      .info {
        & :nth-child(2) {
          background-color: whitesmoke;
        }
      }
    }
  }

  &.nami,
  &.mpac {
    flex-wrap: wrap-reverse;
    .image {
      img {
        right: 0;
        top: 0;
      }
    }
  }
  &:hover {
    .image {
    }
    .info {
      flex: 7 1 400px;
      & :nth-child(2) {
        background-color: #f5f5f55a;
      }
      p {
        color: black;
      }
    }
  }
  &.nami,
  &.mpac {
    .image {
    }
  }
`;

const Image = styled.div`
  flex: 1 1 200px;
  width: 266px;
  margin: 5px;
  position: relative;
  img {
    height: 100%;
    position: absolute;
    transition: 150ms ease-in-out;
    &:hover {
      scale: 1.01;
      z-index: 5;
      border-radius: 5px;
      box-shadow: 0px 0px 5px #00000084;
    }
  }
`;

const Info = styled.div`
  flex: 8 1 400px;
  z-index: 2;
  margin: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const AUHeading = styled.div`
  background-color: #077a7a;
  height: 50px;
  padding: 1rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 20px;
  color: whitesmoke;
  position: relative;
  &:hover {
  }
  &.fearlesstech {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      #020024 7%,
      #087010 24%,
      #630979 38%,
      #2d044a 51%,
      #45065f 59%,
      #35163d 90%,
      #5ba692 96%,
      #31b843 100%
    );
    *::selection {
      background: #03261a74;
      color: #cfffd6;
    }
    & + div {
      *::selection {
        background: #440f72;
        color: white;
      }
    }
  }
  &.nami {
    background: #0b4593;
    background: linear-gradient(90deg, #0b4593 18%, #0b4593 50%, #dbdb1e 80%);
    *::selection {
      background: #03261a74;
      color: #cfffd6;
    }
    & + div {
      *::selection {
        background: #dbdb1e;
      }
    }
  }
  &.mprn {
    background: rgb(49, 184, 67);
    background: linear-gradient(
      90deg,
      rgba(49, 184, 67, 1) 0%,
      rgba(2, 0, 36, 1) 51%,
      rgba(3, 4, 38, 1) 64%,
      rgba(12, 66, 68, 1) 80%,
      rgba(49, 184, 67, 1) 100%
    );
    *::selection {
      background: #03261a74;
      color: #cfffd6;
    }
    & + div {
      *::selection {
        background: rgba(2, 0, 36, 1) 51%;
        color: white;
      }
    }
  }
  &.mpac {
    background: rgb(38, 63, 60);
    background: linear-gradient(
      90deg,
      rgba(38, 63, 60, 1) 0%,
      rgba(125, 150, 159, 1) 18%,
      rgba(41, 116, 136, 1) 36%,
      rgba(42, 113, 131, 1) 54%,
      rgba(125, 150, 159, 1) 69%,
      rgba(41, 116, 136, 1) 100%
    );
  }
  &::before {
    content: "";
    position: absolute;
    width: 11px;
    height: 8px;
    background-color: #077a7a;
    left: 0;
    bottom: -7.5px;
    transform: rotateY("45deg");
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 5%);
    position: absolute;
    width: 10px;
    height: 8px;
    background-color: #077a7a;
    left: 0;
    bottom: -8px;
    transform: rotateY("45deg");
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }
  h1 {
    font-size: 1.5rem;
    font-family: "Croissant One";
    margin: 5px;
  }
`;

const Description = styled.div`
  background-color: whitesmoke;
  margin-left: 0.6rem;
  padding: 1rem;
  p,
  a {
    font-size: 1rem;
    font-family: "Bad Script";
    letter-spacing: 0.7px;
  }
  p {
    font-weight: 600;
    color: #585858;
  }
  a {
    font-weight: 900;
    font-size: 1.5rem;
  }
  hr {
    width: 100%;
  }
`;
export { Container, Content, Image, Info, AUHeading, Description };
