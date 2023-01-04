import { useEffect, useState } from "react";
import db, { auth } from "../../firebase";
import firebase from "firebase";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import { FaEllipsisH } from "react-icons/fa";
import { CommentMenuButton } from "./CommentMenuButton";

export function AllComments({ comments, articleId, triggerPostRerender }) {
  const [commenterDetails, setcommenterDetails] = useState(null);
  const [showOptions, setshowOptions] = useState(true);
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
    const timeString = date.toLocaleDateString(undefined, dateOptions).toString();
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
    <>
      <p style={{ textAlign: "left", marginLeft: "15px" }}>Comments:</p>
      {comments.map((comment) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#FFFDD0",
            padding: "10px",
            margin: "5px 15px 5px 15px",
            borderRadius: "10px",
          }}
          key={comment.timestamp}
        >
          <div>
            <img
              src="https://surgeinstitute.org/wp-content/uploads/2015/04/Facebook-no-profile-picture-icon-620x389.jpg"
              alt="commenter profile picture"
              width="44px"
              height="40px"
              style={{ marginRight: "10px", borderRadius: "5px" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            {openCommentEditInput && comment.commenterUid === user.uid ? (
              <>
                <textarea style={{ width: "100%" }} type="text" value={editCommentText} onChange={(e) => seteditCommentText(e.target.value)} />
              </>
            ) : (
              <section>
                <p style={{ textAlign: "left", fontSize: "0.8em" }}>{comment.postedBy}</p>
                <p style={{ textAlign: "left", fontSize: "0.7em" }}>{comment.text}</p>
                <p style={{ textAlign: "left", fontSize: "0.5em" }}>{getTimeString(comment)}</p>
              </section>
            )}

            {comment.commenterUid === user.uid ? (
              !openCommentEditInput ? (
                <section>
                  <CommentMenuButton
                    initateCommentEdit={setopenCommentEditInput}
                    seteditCommentText={seteditCommentText}
                    commentText={comment.text}
                    deleteComment={deleteComment}
                    commentId={comment.id}
                  />
                </section>
              ) : (
                <div>
                  <Button size="small" onClick={() => saveEditedComment(comment.id)}>
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
        </div>
      ))}
    </>
  );
}
