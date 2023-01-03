import ReactPlayer from "react-player";
import { FaEllipsisH } from "react-icons/fa";
import { Article, SharedActor, Description, SharedImage, SocialCounts, SocialActions } from "../styles/stylesMain";
import { useEffect, useState } from "react";
import { AddComment } from "./AddComment";
import db from "../firebase";
import { AllComments } from "./AllComments";
export function SinglePost({ article, id }) {
  const [showCommentBox, setshowCommentBox] = useState(false);
  const [comments, setcomments] = useState([]);
  useEffect(() => {
    (async function getComments() {
      const articleRef = db.collection("articles").doc(id);
      const commentsRef = articleRef.collection("comments").orderBy("timestamp", "desc");
      const snapshot = await commentsRef.get();
      const allComments = snapshot.docs.map((doc) => doc.data());
      setcomments(allComments);
    })();
  }, [showCommentBox]);
  return (
    <Article>
      <SharedActor>
        <a>
          <img src={article.actor.image} alt="" />
          <div>
            <span>{article.actor.title}</span>
            <span>{article.actor.date.toDate().toLocaleDateString()}</span>
          </div>
        </a>
        <button>
          <FaEllipsisH size={20} style={{ margin: "8px", fill: "#99d3df" }} />
        </button>
      </SharedActor>
      <Description>{article.description}</Description>
      <SharedImage>
        <a>
          {!article.sharedImg && article.video ? (
            <ReactPlayer width={"100%"} url={article.video} />
          ) : (
            article.sharedImg && <img src={article.sharedImg} alt="" />
          )}
        </a>
      </SharedImage>
      <SocialCounts>
        <li>
          <a>{article.likes} Likes</a>
        </li>
        <li>
          <a>{comments.length} Comments</a>
        </li>
      </SocialCounts>
      <SocialActions>
        <button>
          <span>Like</span>
        </button>
        <button onClick={() => setshowCommentBox(true)}>
          <span>Comment</span>
        </button>
      </SocialActions>
      {showCommentBox && <AddComment articleId={id} setshowCommentBox={setshowCommentBox} />}
      {comments.length > 0 && <AllComments comments={comments} />}
    </Article>
  );
}
