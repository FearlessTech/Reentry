import { useState } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { postArticleAPI } from '../actions';

import { FaFilm, FaRegImage } from "react-icons/fa";
import { BsFillChatFill } from "react-icons/bs";
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
  ShareComment,
  PostButton,
  Editor,
  UploadImage
} from '../styles/stylesPostModal.jsx';

const PostModal = (props) => {
  const [editorText, setEditorText] = useState('');
  const [sharedImage, setSharedImage] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [assetArea, setAssetArea] = useState('');

  const handleChange = (e) => {
    const image = e.target.files[0];
    if(image === '' || image === undefined)
    { alert(`not an image, the file is a ${typeof image}`);
      return;
    }
    setSharedImage(image);
  };

  const switchAssetArea = (area) => {
    setSharedImage('');
    setVideoLink('');
    setAssetArea(area);
  };

  const postArticle = (e) => {
    e.preventDefault();
    if(e.target !== e.currentTarget)
    { return;
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
    setSharedImage('');
    setVideoLink('');
    setAssetArea('');
    props.handleClick(e);
  }

  // This function bubble the event between the parent and child of the close modal button
  const handleClickBubbling = (event) => {
    reset(event)
  }

  return (
    <>
      { props.showModal === "open" &&
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={(event) => handleClickBubbling(event)}><AiOutlineCloseCircle onClick={ (event)=>reset(event)} /></button>
            </Header>
            <SharedContent>
              <UserInfo>
                {props.user.photoURL ? (
                  <img src={props.user.photoURL} />
                ) : (<img src="/images/user.svg" alt="" />
                )}
                <span>{props.user.displayName}</span>
              </UserInfo>
              <Editor>
                <textarea
                  value={editorText}
                  onChange = {(e) => setEditorText(e.target.value)}
                  placeholder="What do you want to talk about?"
                  onFocus = {true}
                />
                { assetArea === 'image' ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept='image/gif, image/jgp, image/png, image/jpeg'
                      id="file"
                      style = {{display: "none"}}
                      onChange = {handleChange}
                    />
                    <p><label htmlFor="file" style = {{cursor: "pointer"}}>Select an image</label></p>
                    {sharedImage && <img src={URL.createObjectURL(sharedImage)} />}
                  </UploadImage>
                  ) : (
                    assetArea === 'media' && (
                      <>
                        <input
                          type="text"
                          placeholder="Please upload a video"
                          value = {videoLink}
                          onChange = { (e) => setVideoLink(e.target.value) }
                        />
                        {videoLink && ( <ReactPlayer width={"100%"} url={videoLink}/> )}
                      </>
                    )
                  )}
              </Editor>
            </SharedContent>
            <SharedCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea('image')}><FaRegImage /></AssetButton>
                <AssetButton onClick = {() => switchAssetArea('media')}><FaFilm/></AssetButton>
              </AttachAssets>
              <ShareComment>
                <AssetButton><BsFillChatFill />Anyone</AssetButton></ShareComment>
              <PostButton
                disabled = {!editorText ? true : false}
                onClick = {(event) => postArticle(event)} >
                Post
              </PostButton>
            </SharedCreation>
          </Content>
        </Container>
      }
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

export default connect(mapStateToProps, mapDispatchToProps) (PostModal);