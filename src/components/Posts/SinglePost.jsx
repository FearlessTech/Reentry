import ReactPlayer from "react-player";
import { FaEllipsisH } from "react-icons/fa";
import {
  Article,
  SharedActor,
  Description,
  SharedImage,
  SocialCounts,
  SocialActions,
} from "../../styles/stylesMain";
import { useEffect, useState } from "react";
import { AddComment } from "./comments/AddComment";
import db, { auth } from "../../firebase";
import { SingleComment } from "./comments/SingleComment";
import firebase from "firebase";
import { isUrl, splitString } from "./urlIdentifier";
import { ArticleMenuButton } from "./ArticleMenuButton";

export function SinglePost({ article, id }) {
  const user = auth.currentUser;
  const [showCommentBox, setshowCommentBox] = useState(false);
  const [comments, setcomments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
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
      const commentsRef = articleRef
        .collection("comments")
        .orderBy("timestamp", "asc");
      const snapshot = await commentsRef.get();
      const allComments = snapshot.docs.map((doc) => {
        const commentObject = { ...doc.data(), id: doc.id };
        return commentObject;
      });
      setcomments(allComments);
      const likedBy = article.likedBy;

      if (likedBy) {
        setLikes(likedBy);
        if (likedBy.includes(user.uid)) {
          setHasLiked(true);
        }
      } else {
        setLikes([]);
      }
    })();
  }, [showCommentBox, rerender]);

  const handleLike = async () => {
    try {
      if (hasLiked) {
        setHasLiked(false);
        const updatedLikes = likes.slice();
        const index = updatedLikes.indexOf(user.id);
        updatedLikes.splice(index, 1);
        setLikes(updatedLikes);
        const articleRef = db.collection("articles").doc(id);
        await articleRef.update({
          likedBy: firebase.firestore.FieldValue.arrayRemove(user.uid),
        });
      } else {
        setHasLiked(true);
        setLikes((likes) => [...likes, user.uid]);
        const articleRef = db.collection("articles").doc(id);
        await articleRef.update({
          likedBy: firebase.firestore.FieldValue.arrayUnion(user.uid),
        });
      }
    } catch (error) {
      triggerPostRerender(rerender + Math.random());
    }
  };
  const fileType = article.video
    ? article.video
    : article.sharedImg
    ? article.sharedImg
    : null;
  return (
    <Article>
      <SharedActor>
        <a>
          <img src={article.actor.image} alt="" />
          <div>
            <span>{article.actor.title}</span>
            <span>
              {article.actor.date
                .toDate()
                .toLocaleDateString(undefined, dateOptions)}
            </span>
          </div>
        </a>
        {article.actor.uid === user.uid ? (
          <section>
            <ArticleMenuButton
              fileType={fileType}
              articleText={article.description}
              articleId={id}
              triggerPostRerender={triggerPostRerender}
            />
          </section>
        ) : null}
      </SharedActor>
      <Description>
        {(() => {
          const res = splitString(article.description).map((str) =>
            isUrl(str) ? (
              <a href={str} target="_blank">
                {str}
              </a>
            ) : (
              str
            )
          );
          return res;
        })()}
      </Description>
      <SharedImage>
        <a>
          {!article.sharedImg && article.video ? (
            <ReactPlayer
              width={"100%"}
              height="100%"
              url={article.video}
              controls
            />
          ) : (
            article.sharedImg && <img src={article.sharedImg} alt="" />
          )}
        </a>
      </SharedImage>
      <SocialCounts>
        <li>
          <a>{likes?.length} Likes</a>
        </li>
        <li>
          <a>{comments.length} Comments</a>
        </li>
      </SocialCounts>
      <SocialActions className="social">
        <button onClick={() => handleLike()}>
          <span>{hasLiked ? "Unlike" : "Like"}</span>
        </button>
        <button onClick={() => setshowCommentBox(true)}>
          <span>Comment</span>
        </button>
      </SocialActions>
      {showCommentBox && (
        <AddComment
          articleId={id}
          setshowCommentBox={setshowCommentBox}
          user={user}
        />
      )}
      {comments.length > 0 && (
        <>
          <p style={{ textAlign: "left", marginLeft: "15px" }}>Comments:</p>
          <div style={{ maxHeight: "300px", overflowY: "scroll" }}>
            {comments.map((comment, i) => (
              <SingleComment
                key={i}
                comment={comment}
                articleAuthor={article.actor.uid}
                articleId={id}
                triggerPostRerender={triggerPostRerender}
              />
            ))}
          </div>
        </>
      )}
    </Article>
  );
}
