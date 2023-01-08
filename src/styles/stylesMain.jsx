import styled from "styled-components";

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #e9e9e9;
  border-radius: 5px;
  position: relative;
  border: none;
  border-radius: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  background-color: #e9e9e9;
  border-radius: 5px;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;
    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    outline: none;
    border: none;
    top: 0;
    background: transparent;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
  display: block;
  position: relative;
  background-color: #e9e9e9;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

const SocialCounts = styled.ul`
  line-height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  overflow: auto;
  list-style: none;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  li {
    margin-right: 5px;
    font-size: 12px;
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row-reverse;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  border-radius: 5px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #009999;
    border: none;
    background-color: whitesmoke;
    border-radius: 5px;
    margin: 5px;
    text-align: center;
    @media (min-width: 768px) {
      span {
        margin: 3px;
      }
    }
    &:hover {
      background-color: #077a7a;
      box-shadow: 0 0 5px #009999;
      color: whitesmoke;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  overflow-y: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }
  & > img {
    width: 30px;
  }
`;
const PostNav = styled.div`
  background-color: #009999;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  position: relative;
  border: none;
  border-radius: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  &:hover {
    background-color: #077a7a;
    box-shadow: 0 0 10px #009999;
    color: whitesmoke;
  }
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #077a7a;
    border: none;
    background-color: whitesmoke;
    margin: 8px;
    border-radius: 5px;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
    &:hover {
      background-color: #009999;
      color: whitesmoke;
    }
  }
`;

export {
  Container,
  Article,
  SharedActor,
  Description,
  SharedImage,
  SocialCounts,
  SocialActions,
  Content,
  PostNav,
};
