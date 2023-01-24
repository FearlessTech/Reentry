import styled from "styled-components";

const Container = styled.div`
  padding-top: 10px;
  max-width: 100%;
  display: flex;
  height: max-content;
  align-items: flex-start;
  background-color: #cdcdcd;
  column-gap: 1rem;

  flex-wrap: wrap;
  min-height: 100vh;
`;

const ProfileLeft = styled.div`
  padding-top: 60px;
  flex: 0 1 250px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  height: max-content;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #ffffff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/UserCardHead.jpg");
  background-position: center;
  background-size: 462px;
  height: 70px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  img {
    box-shadow: none;
    width: 72px;
    height: 72px;
    box-sizing: border-box;
    background-clip: content-box;
    background-color: #ffffff;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    border: 2px solid #ffffff;
    margin: -38px auto 12px;
    border-radius: 50%;
  }
`;

const AddPhotoText = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
        line-height: 1.333;

        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }

        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;

  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);

    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  a {
    color: #000000;
    padding: 4px 12px;
    font-size: 12px;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

const ProfileMain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px;
  flex: 1 1 250px;
  main {
    min-height: 100%;
  }
`;

const PFHeading = styled.div`
  background-color: #077a7a;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding-right: 20px;
  color: whitesmoke;
  .border {
    &::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #077a7a;
      margin-top: .95rem;
      left: 21rem;
      transform: rotateY("45deg");
      clip-path: polygon(56% 0, 55% 100%, 3% 51%, 4% 0);
    }
`;
const PFIntro = styled.div``;

const PFCheckBoxes = styled.div`
  height: max-content;
`;

const PFPost = styled.div``;

const PFResourcesPost = styled.div``;

const Content = styled.div`
  min-height: 100px;
  background-color: whitesmoke;
  margin-left: 11px;
`;

export {
  Container,
  ArtCard,
  UserInfo,
  CardBackground,
  Photo,
  AddPhotoText,
  Widget,
  Item,
  CommunityCard,
  ProfileLeft,
  ProfileMain,
  PFIntro,
  PFCheckBoxes,
  PFPost,
  PFResourcesPost,
  PFHeading,
  Content,
};
