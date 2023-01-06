import styled from 'styled-components';

const ResourceDiv = styled.div`
  width: 100%;
  background-color: #cdcdcd;
  & .main-container {
    & > * {
      margin-top: 4rem;
    }
    outline: 1px solid red;
    display: flex;
    justify-content: space-around;
    max-width: 90rem;
    margin: 0 auto;
    min-height: 150vh;

    @media (max-width: 623px) {
      flex-direction: column;
      width: 100%;
    }
  }
`;

/* LEFT */
const StyledLeftASide = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin: 5rem auto;
  }

  @media (max-width: 623px) {
    margin: 3rem auto;
    width: 100%;
    max-width: auto;
    width: 100%;
    max-width: auto;
  }
`;

const LeftOptions = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LeftBox = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: start;
  align-items: flex-start;
  column-gap: 2rem;
  &:hover {
    background-color: #d0d0d018;
  }
  a {
    color: black;
    width: max-content;
    font-size: 16px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LeftLogo = styled.div`
  img {
    width: 20px;
  }
`;

const LeftPostResource = styled.div`
  display: flex;
  padding: 1rem 2rem;
  border: 2px solid rgb(3, 98, 223);
  color: rgb(3, 98, 223);
  border-radius: 50px;
  text-align: center;
  margin: 0.8rem auto;
  &:hover {
    cursor: pointer;
    background-color: rgb(215, 233, 255);
  }
`;

const LeftBName = styled.div`
  margin-left: 1rem;
`;

const LeftBLogo = styled.div`
  width: 25px;
  display: grid;
  place-items: center;
  img {
    width: auto;
  }

  @media (max-width: 623px) {
    display: none;
  }
`;

/* MIDDLE */
const StyledMiddleAside = styled.div`
  width: 43%;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin: 5rem auto;
  }

  @media (max-width: 623px) {
    margin: 1rem auto 0rem auto;
    width: 100%;
    max-width: auto;
    width: 100%;
    max-width: auto;
  }
`;

const StyledRecent = styled.div`
  display: flex;
  border-radius: 10px;
  padding: .4rem .8rem;
  background-color: white;
  margin-bottom: 1rem;
`;

const MTcontent = styled.div`
  font-size: medium;
  width: 100%;
  height: 100px;
  h1 {
    font-size: 20px;
    margin: 0.5rem 0;
    font-weight: 300;
  }
  h3 {
    text-indent: 1rem;
    font-size: 15px;
    margin: 2% 0;
    span {
      color: #089408;
    }
  }
  span {
    font-size: 14px;
    color: #00000090;
  }
  button {
    width: 10%;
    height: 2rem;
    margin: 2rem;
    background-color: white;
    border: none;
    color: #00000090;
    cursor: pointer;
    &:hover {
      padding: 2%;
      margin: 2% 0 0 0.5%;
      border-radius: 50px;
      background-color: gainsboro;
    }
  }
`;

const MiddleM = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 0.2rem;
  h2 {
    padding: 1rem 1rem 0.25rem 1rem;
    font-size: 100%;
  }
  p {
    padding: 0.5rem 1rem 2rem 1rem;
    font-size: 80%;
    color: #00000090;
  }
  .cards {
    outline: 1px;
  }
`;

const OcupationCard = styled.div`
  display: flex;
  cursor: pointer;
  align-items: stretch;
  margin: 2rem 0;
  &:hover {
    background-color: #dfdfdf29;
  }
`;

const OcupationCardLogo = styled.div`
  width: 120px;
  img {
    width: auto;
    margin: 0 1rem 1rem 1rem;
  }
`;

const OcupationCardInfo = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.5rem;
  * {
    margin: 0.2rem 0.5rem;
  }
  h3 {
    color: #0362df;
    margin: 0.7rem 0.5rem;
  }
  h1:hover {
    text-decoration: underline;
  }

  span {
    color: #00000090;
    display: block;
  }
`;

const ActiveLogo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  padding: 0.4rem 0;
  img {
    width: 40px;
    height: 40px;
  }
  span {
    color: #00000090;
    font-weight: 600;
  }
`;

const ContentBottom = styled.div`
  text-align: end;
  padding: 0 1rem;
  span {
    color: #00000090;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  width: 15%;
  margin: 0.8rem 0.7rem;
`;

const Actions = styled.div`
  display: flex;
  width: 100%;
  margin: 0.3rem;
`;

const IconHolder = styled.div`
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
      fill: #00000090;
    }
  }
  hover {
    background-color: gainsboro;
    border-radius: 50px;
    transform: scale(125%);
  }
  @media (max-width: 623px) {
    width: 95%;
    margin: auto;
  }
`;

/* RIGHT */
const StyledRightAside = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  min-width: 150px;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin: 5rem auto;
  }

  @media (max-width: 623px) {
    margin: 1rem auto 1rem auto;
    width: 100%;
    max-width: auto;
    width: 100%;
    max-width: auto;
  }
`;

const RTopBox = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const RT = styled.div`
  h1 {
    font-size: 100%;
    margin-bottom: 1rem;
  }
  p {
    font-size: 100%;
    color: #00000090;
  }
`;

const RB = styled.div`
  transition: ease-in-out 300ms;
  &:hover {
    transform: scale(1.01) translateX(10px);
  }
  margin-top: 2rem;
  p {
    color: rgb(201, 122, 247);
    cursor: pointer;
  }
`;

const RBottomBox = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  margin-top: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #00000090;
  margin-bottom: 2.5rem;
  span {
    width: 90%;
    cursor: pointer;
    font-size: 85%;
    color: #00000090;
  }
`;

const RBLink = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  margin-top: 1rem;
  img {
    width: 25%;
    height: 20%;
    border-radius: 10px;
  }
  p {
    font-size: 80%;
    margin-top: 2.5%;
  }
  @media (max-width: 623px) {
    width: 95%;
    padding-top: 1.5rem;
    margin: auto;
    max-width: initial;
    img {
      width: 12%;
      height: 25px;
      margin: 2% 0 0 25%;
    }
  }
`;

export {
  ResourceDiv,
  StyledLeftASide,
  LeftOptions,
  LeftBox,
  LeftLogo,
  LeftPostResource,
  LeftBName,
  LeftBLogo,
  StyledMiddleAside,
  StyledRecent,
  MTcontent,
  MiddleM,
  OcupationCard,
  OcupationCardLogo,
  OcupationCardInfo,
  ActiveLogo,
  ContentBottom,
  ActionsContainer,
  Actions,
  IconHolder,
  StyledRightAside,
  RTopBox,
  RT,
  RB,
  RBottomBox,
  RBLink,
};