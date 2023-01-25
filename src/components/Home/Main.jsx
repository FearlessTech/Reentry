import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArticlesAPI } from "../../actions";
import PostModal from "../Posts/PostModal";

import { IoMdSettings } from "react-icons/io";

import { Container, Content, PostNav } from "./stylesMain";
import { SinglePost } from "../Posts/SinglePost";
const Main = (props) => {
  const [showModal, setShowModal] = useState("close");
  useEffect(() => {
    props.getArticles();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
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
  };

  return (
    <Container>
      <PostNav>
        <button
          onClick={handleClick}
          disabled={!!props.loading}
          className="post-space"
        >
          Start a Post
        </button>
        <IoMdSettings
          size={30}
          style={{ margin: "8px", fill: "whitesmoke" }}
        ></IoMdSettings>
      </PostNav>
      <Content>
        {props.loading && <img src="public/images/spin-loading.gif" alt="" />}
        {props.articles.length != 0 &&
          props.articles.map((article) => (
            <SinglePost article={article} id={article.id} key={article.id} />
          ))}
      </Content>
      {showModal === "open" && (
        <PostModal showModal={showModal} handleClick={handleClick} />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticles: () => dispatch(getArticlesAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
