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
} from "../../styles/stylesPostModal.jsx";
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
  const postMode = props.postMode || "new";

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
    return (
      <>
        <AssetButton
          onClick={(e) => {
            // Programatically click the hidden file input element
            // when the Button component is clicked

            const input = hiddenFileInput.current;
            input.click();
          }}
        >
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
  }, []);
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

  return (
    <>
      {props.showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} />
                ) : (
                  <img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <button onClick={(event) => handleClickBubbling(event)}>
                <AiOutlineCloseCircle onClick={(event) => reset(event)} />
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
                  url={URL.createObjectURL(sharedVideo)}
                  className="vid-container"
                  width="100%"
                />
              ) : (
                ""
              )}
            </div>
            <SharedCreation>
              <div className="files-container">
                <AttachAssets>
                  <FileUploader
                    handleFile={setSharedImage}
                    type={"image"}
                    sharedFile={sharedImage}
                  />
                </AttachAssets>
                <AttachAssets>
                  <FileUploader
                    handleFile={setSharedVideo}
                    type={"video"}
                    sharedFile={sharedVideo}
                  />
                </AttachAssets>
              </div>
              {postMode === "new" ? (
                <PostButton
                  disabled={!editorText || !FileUploader ? true : false} // if editorText or file is empty, disable the button
                  onClick={(event) => postArticle(event)}
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
