import { useState } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../../actions";
import React from "react";
import { FaRegImage } from "react-icons/fa";
import { AiFillFileImage, AiFillVideoCamera } from "react-icons/ai";
import ReactPlayer from "react-player";

import {
  Container,
  Content,
  Header,
  SharedContent,
  UserInfo,
  UploadVideo,
  SharedCreation,
  AssetButton,
  AttachAssets,
  PostButton,
  Editor,
  ShareComment,
  UploadImage,
  ShareContent,
  ShareCreation,
} from "../../styles/stylesPostModal.jsx";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    if (image === "" || image === undefined || image === null) {
      alert(`not an image, the file is a ${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const handleVideoChange = (e) => {
    const video = e.target.files[0];
    if (video === "" || video === undefined || video === null) {
      alert(`not an video, the file is a ${typeof video}`);
      return;
    }
    setVideoLink(video);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    const payload = {
      image: shareImage,
      video: videoLink,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    props.postArticle(payload);
    reset(e);
  };

  const reset = (e) => {
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.handleClick(e);
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content className="content">
            <Header>
              <h2>Create post</h2>
              <button onClick={(event) => reset(event)}>
                <img src="/images/close-icon.svg" alt="" />
              </button>
            </Header>
            <ShareContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  autoFocus={true}
                ></textarea>
                {shareImage && (
                  <UploadImage>
                    <img src={URL.createObjectURL(shareImage)} />
                    <div className="filename">{shareImage.name}</div>
                  </UploadImage>
                )}
                {videoLink && (
                  <UploadVideo>
                    <ReactPlayer
                      onClick={() => {
                        const video =
                          document.getElementById("video-player").children[0];
                        video.paused ? video.play() : video.pause();
                      }}
                      id="video-player"
                      url={URL.createObjectURL(videoLink)}
                      width="100%"
                      height="min-content"
                      muted
                    />
                    <div className="filename">{videoLink.name}</div>
                  </UploadVideo>
                )}
              </Editor>
            </ShareContent>
            <ShareCreation>
              <AttachAssets>
                <label htmlFor="image-file">
                  <input
                    type="file"
                    accept="image/gif, image/png, image/jpeg, image/png"
                    name="image-file"
                    id="image-file"
                    style={{ display: "none" }}
                    value={shareImage ? "" : ""}
                    onChange={(e) => {
                      handleImageChange(e);
                    }}
                  />
                  <AssetButton
                    onClick={() => {
                      switchAssetArea("image");
                    }}
                  >
                    <AiFillFileImage size={20} />
                  </AssetButton>
                </label>
                <label htmlFor="video-file">
                  <input
                    type="file"
                    accept="video/mp4,video/x-m4v,video/*"
                    id="video-file"
                    name="video-file"
                    style={{ display: "none" }}
                    value={videoLink ? "" : ""}
                    onChange={(e) => {
                      handleVideoChange(e);
                    }}
                  />
                  <AssetButton
                    onClick={() => {
                      switchAssetArea("media");
                    }}
                  >
                    <AiFillVideoCamera size={20} />
                  </AssetButton>
                </label>
              </AttachAssets>
              <ShareComment>
                <AssetButton>
                  <img src="/images/share-comment.svg" alt="" />
                  Anyone
                </AssetButton>
              </ShareComment>
              <PostButton
                disabled={!editorText ? true : false}
                onClick={(event) => postArticle(event)}
              >
                Post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}{" "}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postArticle: (payload) => dispatch(postArticleAPI(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
