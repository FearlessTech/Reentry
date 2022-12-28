import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { getArticlesAPI } from '../actions';
import PostModal from './PostModal';

import { FaEllipsisH } from "react-icons/fa";
import { IoMdSettings, } from "react-icons/io";


import {
  Container,
  CommonCard,
  Article,
  SharedActor,
  Description,
  SharedImage,
  SocialCounts,
  SocialActions,
  Content,
  PostNav,
} from '../styles/stylesMain';
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
              </SocialActions>
            </Article>
          ))
        }
      </Content>
      <PostModal showModal={showModal} handleClick = {handleClick} />
    </Container>
  );
};

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
