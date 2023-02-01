import { useState, useEffect } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../../actions";
import React from "react";
import { FaRegFileVideo, FaRegImage } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import db from "../../firebase";
import {
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
} from "./stylesPostModal.jsx";
import ReactPlayer from "react-player";
import { useRef } from "react";

const getConfigForType = (type) => {
  switch (type) {
    case "video":
      return {
        Icon: FaRegFileVideo,
        types: "video/mp4,video/x-m4v,video/*",
      };
    case "image":
      return {
        Icon: FaRegImage,
        types: "image/png, image/gif, image/jpeg",
      };
    default:
      return {
        Icon: FaRegImage,
        types: "image/png,image/gif,image/jpeg,image/*",
      };
  }
};

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [sharedImage, setSharedImage] = useState("");
  const [sharedVideo, setSharedVideo] = useState("");
  const videoPlayer = useRef();
  const postMode = props.postMode || "new";
  const maxFileSize = 10000000;

  const handleFile = (file, type) => {
    if (file.size > maxFileSize) {
      alert("File size exceeded the maximum limit of 10MB");
      return;
    }
    if (type === "image") setSharedImage(file);
    else if (type === "video") setSharedVideo(file);
  };

  const FileUploader = (props) => {
    const config = getConfigForType(props.type);
    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef();

    const clear = (cb) => {
      setSharedImage("");
      setSharedVideo("");
      cb();
    };

    const handleInputChange = (e) => {
      // Call a function (passed as a prop from the parent component)
      // to handle the user-selected file
      if (e.target.files.length > 0) {
        clear(() => {
          const fileUploaded = e.target.files[0];
          props.handleFile(fileUploaded);
        });
      }
    };
    const handleAssetBtnClick = () => {
      // Programatically click the hidden file input element
      // when the Button component is clicked

      const input = hiddenFileInput.current;
      input.click();
    };
    return (
      <>
        <AssetButton onClick={handleAssetBtnClick}>
          <config.Icon />
        </AssetButton>
        <input
          accept={config.types}
          type="file"
          ref={hiddenFileInput}
          onChange={handleInputChange}
          style={{ display: "none" }} // Hide the file input element
        />
      </>
    );
  };

  useEffect(() => {
    const postText = props.postText || "";
    setEditorText(postText);
  }, [props.postText]);

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: sharedImage,
      video: sharedVideo,
      user: props.user,
      description: editorText,
      timestamp: firebase.firestore.Timestamp.now(),
    };

    console.log(payload);

    props.postArticle(payload);
    reset(e);
  };

  async function saveEditedArticle(e) {
    const postId = props.postId;
    const editedText = editorText;
    const articleRef = db.collection("articles").doc(postId);
    await articleRef.update({ description: editedText, edited: true });
    props.setShowModal("close");
    props.setshowMenu(true);
    setEditorText("");
    setSharedImage("");
    setSharedVideo("");
  }

  const reset = (e) => {
    setEditorText("");
    setSharedImage("");
    setSharedVideo("");
    props.handleClick(e);
  };

  // This function bubble the event between the parent and child of the close modal button
  const handleClickBubbling = (event) => {
    reset(event);
  };
  const handlePlayerClick = () => {
    const videoTag = videoPlayer.current.player.player.player;
    videoTag.paused ? videoTag.play() : videoTag.pause();
  };

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="" />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <button onClick={(event) => handleClickBubbling(event)}>
                <AiOutlineCloseCircle
                  style={{ margin: "auto" }}
                  onClick={(event) => reset(event)}
                />
              </button>
            </Header>
            <SharedContent>
              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                />
              </Editor>
            </SharedContent>
            <div className="preview">
              {sharedImage ? (
                <div className="img-container">
                  <img src={URL.createObjectURL(sharedImage)} alt="" />
                </div>
              ) : sharedVideo ? (
                <ReactPlayer
                  ref={videoPlayer}
                  url={URL.createObjectURL(sharedVideo)}
                  className="vid-container"
                  width={"100%"}
                  height={"100%"}
                  onClick={handlePlayerClick}
                />
              ) : (
                ""
              )}
            </div>
            <SharedCreation>
              <div className="files-container">
                <AttachAssets>
                  <FileUploader
                    handleFile={(file) => handleFile(file, "image")}
                    type={"image"}
                    sharedFile={sharedImage}
                  />
                </AttachAssets>
                <AttachAssets>
                  <FileUploader
                    handleFile={(file) => handleFile(file, "video")}
                    type={"video"}
                    sharedFile={sharedVideo}
                  />
                </AttachAssets>
              </div>
              {postMode === "new" ? (
                <PostButton
                  disabled={!editorText && !sharedImage && !sharedVideo}
                  onClick={postArticle}
                >
                  Post
                </PostButton>
              ) : (
                <PostButton onClick={(e) => saveEditedArticle(e)}>
                  Save Changes
                </PostButton>
              )}
            </SharedCreation>
          </Content>
        </Container>
      )}
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
