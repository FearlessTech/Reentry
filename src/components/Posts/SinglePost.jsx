import ReactPlayer from "react-player";
import { FaEllipsisH } from "react-icons/fa";
import { Article, SharedActor, Description, SharedImage, SocialCounts, SocialActions } from "../../styles/stylesMain";
import { useEffect, useState } from "react";
import { AddComment } from "./AddComment";
import db, { auth } from "../../firebase";
import { SingleComment } from "./SingleComment";
export function SinglePost({ article, id }) {
  const user = auth.currentUser;
  const [showCommentBox, setshowCommentBox] = useState(false);
  const [comments, setcomments] = useState([]);
  const [rerender, triggerPostRerender] = useState(1);
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  useEffect(() => {
    (async function getComments() {
      const articleRef = db.collection("articles").doc(id);
      const commentsRef = articleRef.collection("comments").orderBy("timestamp", "asc");
      const snapshot = await commentsRef.get();
      const allComments = snapshot.docs.map((doc) => {
        const commentObject = { ...doc.data(), id: doc.id };
        return commentObject;
      });
      setcomments(allComments);
    })();
  }, [showCommentBox, rerender]);
  return (
    <Article>
      <SharedActor>
        <a>
          <img src={article.actor.image} alt="" />
          <div>
            <span>{article.actor.title}</span>
            <span>{article.actor.date.toDate().toLocaleDateString(undefined, dateOptions)}</span>
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
      {showCommentBox && <AddComment articleId={id} setshowCommentBox={setshowCommentBox} user={user} />}
      {comments.length > 0 && (
        <>
          <p style={{ textAlign: "left", marginLeft: "15px" }}>Comments:</p>
          <div style={{ maxHeight: "300px", overflow: "scroll" }}>
            {comments.map((comment) => (
              <SingleComment comment={comment} articleAuthor={article.actor.uid} articleId={id} triggerPostRerender={triggerPostRerender} />
            ))}
          </div>
        </>
      )}
    </Article>
  );
}

{
}
