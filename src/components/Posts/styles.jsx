import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: #000000;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: whitesmoke;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  .preview {
    padding: 0.5rem 2rem;
    .img-container {
      width: 250px;
      margin: auto;
      max-width: 100%;
      flex: 1 1 300px;
      text-align: center;
      img {
        width: 100%;
      }
      &:hover {
        transform: scale(1.3);
      }
    }
    .vid-container {
      flex: 1 1 200px;
      margin: auto;
      max-width: 250px;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

const Header = styled.div`
  padding: 5px 25px;
  border-bottom: 1px solid #00000026;
  font-size: 16px;
  line-height: 1.5;
  color: whitesmoke;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff4d;
  background-color: #077a7a;
  border-radius: 5px;

  button {
    height: 30px;
    width: 30px;
    min-width: auto;
    display: flex;
    color: #077a7a;
    background: whitesmoke;
    border-radius: 7px;
    border-color: lightgray;
    &:hover {
      background: lightgray;
    }

    img {
      pointer-events: none;
    }
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: max-content;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
    margin-right: 5px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
  }
`;

const SharedCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem 1rem;
  .files-container {
    display: flex;
  }
`;

const AssetButton = styled.button`
  display: flex;
  margin-right: 5px;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: whitesmoke;
  background: #009999;
  border-radius: 7px;
  border-color: #009999;
  &:hover {
    background: #077a7a;
  }
`;

const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;

  ${AssetButton} {
    width: 40px;
  }
`;

const PostButton = styled.button`
  min-width: 60px;
  border-radius: 7px;
  border-color: lightgray;
  padding-left: 16px;
  padding-right: 16px;
  font-weight: 600;
  background: ${(props) => (props.disabled ? "lightgray" : "#077a7a")};
  color: ${(props) => (props.disabled ? "rgba(1,1,1,0.2)" : "whitesmoke")};

  &:hover {
    background: ${(props) => (props.disabled ? "lightgray" : "#009999")};
    cursor: ${(props) => (props.disabled ? "none" : "pointer")};
    outline: none !important;
  }
`;

const Editor = styled.div`
  padding: 0.5rem 2rem;

  textarea {
    box-sizing: border-box;
    width: 100%;
    border-radius: 7px;
    min-height: 100px;
    resize: vertical;
    max-height: 200px;
    background-color: white;
    padding-left: 0.5rem;
  }

  input {
    width: 100%;
    border-radius: 7px;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export {
  Container,
  Content,
  Header,
  SharedContent,
  UserInfo,
  SharedCreation,
  AssetButton,
  AttachAssets,
  PostButton,
  Editor,
};
