import { useState } from "react";
import db, { auth } from "../../../../services/firebase/firebase";
import { Button } from "@material-ui/core";
import { CommentMenuButton } from "../CommentMenu/CommentMenuButton";
import { splitString, isUrl } from "../../../../helpers/urlIdentifier";
import Container from "./styles";
import { UserImage } from "../../../Image";

export function SingleComment({
  comment,
  triggerPostRerender,
  articleId,
  articleAuthor,
}) {
  const [editCommentText, seteditCommentText] = useState("");
  const [openCommentEditInput, setopenCommentEditInput] = useState(false);
  const user = auth.currentUser;
  function getTimeString(comment) {
    const timestamp = comment.timestamp;
    const dateOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const date = timestamp.toDate();
    const timeString = date
      .toLocaleDateString(undefined, dateOptions)
      .toString();
    return timeString;
  }

  async function saveEditedComment(commentId) {
    const articleRef = db.collection("articles").doc(articleId);
    const commentsRef = articleRef.collection("comments");
    const commentRef = commentsRef.doc(commentId);
    await commentRef.update({ text: editCommentText, edited: true });
    triggerPostRerender(Math.random());
    setopenCommentEditInput(false);
  }

  async function deleteComment(commentId) {
    const articleRef = db.collection("articles").doc(articleId);
    const commentsRef = articleRef.collection("comments");
    const commentRef = commentsRef.doc(commentId);
    await commentRef.delete();
    triggerPostRerender(Math.random());
  }

  return (
    <Container key={comment.timestamp}>
      <div className="picture-wrapper">
        <UserImage source={comment.commenterProfilePic} />
      </div>
      <div className="comment-content-container">
        {openCommentEditInput && comment.commenterUid === user.uid ? (
          <textarea
            className="comment-edit-box"
            type="text"
            value={editCommentText}
            onChange={(e) => seteditCommentText(e.target.value)}
          />
        ) : (
          <section className="comment-content">
            <p className="postedby">{comment.postedBy}</p>
            <p className="comment-text">
              {(() => {
                const res = splitString(comment.text).map((str) =>
                  isUrl(str) ? (
                    <a href={str} target="_blank" rel="noreferrer">
                      {str}
                    </a>
                  ) : (
                    str
                  )
                );
                return res;
              })()}
            </p>
            <p className="publication-date">{getTimeString(comment)}</p>
          </section>
        )}

        {comment.commenterUid === user.uid || articleAuthor === user.uid ? (
          !openCommentEditInput ? (
            <section>
              <CommentMenuButton
                initateCommentEdit={setopenCommentEditInput}
                seteditCommentText={seteditCommentText}
                commentText={comment.text}
                deleteComment={deleteComment}
                commentId={comment.id}
                allowEdit={comment.commenterUid === user.uid}
              />
            </section>
          ) : (
            <div>
              <Button
                size="small"
                onClick={() => saveEditedComment(comment.id)}
              >
                Save
              </Button>
              <Button
                size="small"
                onClick={() => {
                  setopenCommentEditInput(false);
                }}
              >
                Cancel
              </Button>
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}
