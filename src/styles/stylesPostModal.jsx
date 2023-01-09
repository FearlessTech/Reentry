import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
  overflow-y: scroll;
`;

export const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-height: auto;
    color: rgba(0, 0, 0, 0.15);
    svg,
    img {
      pointer-events: none;
    }
  }
`;

export const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vartical-align: baseline;
  padding: 8px 12px;
  background: transparent;
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  svg,
  img {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

export const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;
export const AssetButton = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

export const AttachAssets = styled.div`
  align-items: center;
  display: flex;
  padding-right: 8px;
  ${AssetButton} {
    width: 50px;
  }
`;
export const ShareComment = styled.div`
  padding-left: 8px;
  margin-right: auto;
  border-left: 1px solid rgba(0, 0, 0, 0.15);

  ${AssetButton} {
    margin-right: 5px;
  }
`;
export const PostButton = styled.div`
  min-width: 60px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  padding-left: 16px;
  padding-right: 16px;
  background: ${(props) => (props.disabled ? "rgba(0,0,0,0.8)" : "#0a66c2")};
  text-align: center;
  padding-top: 10px;
  color: ${(props) => (props.disabled ? "#fdfdfd66" : "#000000")};
  font-weight: 700;
  &:hover {
    color: ${(props) => (props.disabled ? "#1c1c1ce7" : "#a0a0a0")};
    background: ${(props) => (props.disabled ? "rgba(0,0,0,0.08)" : "#004182")};
  }
`;

export const Editor = styled.div`
  padding: 12px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  textarea {
    width: 100%;
    min-height: 100px;
    resize: vertical;
    align-items: center;
  }
  input {
    width: 100%;
    height: 35px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const UploadImage = styled.div`
  text-align: center;
  position: relative;
  img {
    width: 100%;
  }
  .filename {
    position: absolute;
    bottom: 1rem;
    text-align: center;
    width: 100%;
    background-color: #616a725b;
  }
`;

export const UploadVideo = styled.div`
  flex: 1 1 300px;
  position: relative;
  video {
  }
  .filename {
    position: absolute;
    bottom: 2rem;
    text-align: center;
    width: 100%;
    background-color: #616a725b;
  }
`;
