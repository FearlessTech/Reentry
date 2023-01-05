import { useState } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import { postArticleAPI } from "../../actions";
import React from "react";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

const FileUploader = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <AssetButton onClick={handleClick}>
        <FaRegImage />
      </AssetButton>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }} // Hide the file input element
      />
    </>
  );
};
const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [sharedImage, setSharedImage] = useState("");
  const [videoLink, setVideoLink] = useState("");

  const postArticle = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: sharedImage,
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
    setSharedImage("");
    setVideoLink("");
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
                {props.user.photoURL ? <img src={props.user.photoURL} /> : <img src="/images/user.svg" alt="" />}
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
                  onFocus={true}
                />
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <FileUploader handleFile={setSharedImage} />
              </AttachAssets>

              <PostButton
                disabled={!editorText || !FileUploader ? true : false} // if editorText or file is empty, disable the button
                onClick={(event) => postArticle(event)}
              >
                Post
              </PostButton>
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
