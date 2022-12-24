import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostModal from './PostModal';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { getArticlesAPI } from '../actions';
import { FaEllipsisH, FaThumbsUp } from "react-icons/fa";
import { IoMdSettings, } from "react-icons/io";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  useEffect(() => {
    props.getArticles()
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if(e.target !== e.currentTarget) {
      return;
    }

    switch(showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  }

  return (
    <Container>
      <PostNav>
        <button
          onClick = {handleClick}
          disabled = { !!props.loading }
          className="post-space">
          Start a Post
        </button>
        <IoMdSettings size={30} style={{margin: '8px', fill:'#99d3df'}}></IoMdSettings>
      </PostNav>
      <Content>
        {props.loading && <img src="public/images/spin-loading.gif" alt=""/>}
        {props.articles.length != 0 &&
          props.articles.map((article, key) => (
            <Article key = {key} >
              <SharedActor>
                <a>
                  <img src={article.actor.image} alt="" />
                  <div>
                    <span>{article.actor.title}</span>
                    <span>{article.actor.description}</span>
                    <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                  </div>
                </a>
                <button><FaEllipsisH size={20} style={{margin: '8px', fill:'#99d3df'}} /></button>
              </SharedActor>
              <Description>{article.description}</Description>
              <SharedImage>
                <a>
                  {!article.sharedImg && article.video ?
                    (<ReactPlayer width = {'100%'} url={article.video} />)
                    :
                    (article.sharedImg && <img src={article.sharedImg} alt=""/>)
                  }
                </a>
              </SharedImage>
              <SocialCounts>
                <li><a>{article.likes} Likes</a></li>
                <li><a>{article.comments} Comments</a></li>
              </SocialCounts>
              <SocialActions>
                <button><span>Like</span></button>
                <button><span>Comment</span></button>
                <button><span>Share</span></button>
                <button><span>Send</span></button>
              </SocialActions>
            </Article>
          ))
        }
      </Content>
      <PostModal showModal={showModal} handleClick = {handleClick} />
    </Container>
  );
};

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
        &:nth-child(n+1) {
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
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImage = styled.div`
  margin-top: 8px;
  width: 100%;
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
  justify-content: center;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  border-radius: 5px;

  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #88BBD6;
    border: none;
    background-color: #FCF4A3;
    border-radius: 5px;
    margin: 5px;
    text-align: center;

    @media (min-width: 768px) {
      span {
        margin: 3px;
      }
    }
    &:hover {
      background-color: #FFFDD0;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  & > img {
    width: 30px;
  }
`;
const PostNav = styled.div`
  background-color: #FCF4A3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 5px;
  position: relative;
  border: none;
  border-radius: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    border: none;
    background-color: #99d3df;
    margin: 8px;
    border-radius: 5px;

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
    &:hover {
      background-color: #88bbd6;
    }
  }
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps) (Main);