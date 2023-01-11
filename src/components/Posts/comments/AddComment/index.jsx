import Container from "./styledComments";
import { Button, ButtonGroup } from "@material-ui/core";
import { useState } from "react";
import db, { auth } from "../../../../firebase";

export function AddComment({ articleId, setshowCommentBox }) {
  const [commentText, setcommentText] = useState("");

  async function addCommentToFireStoreDocument(e, articleId) {
    const user = auth.currentUser;
    e.preventDefault();

    const timestamp = new Date();
    const comment = {
      text: commentText,
      postedBy: user.displayName,
      timestamp: timestamp,
      commenterUid: user.uid,
      commenterProfilePic: user.photoURL,
    };

    const articleRef = db.collection("articles").doc(articleId);
    const commentsRef = articleRef.collection("comments");
    const response = await commentsRef.add(comment);

    setshowCommentBox(false);
  }

  return (
    <Container>
      <div className="picture-wrapper">
        <img src={auth.currentUser.photoURL} alt="commenter profile picture" />
      </div>
      <div className="comment-container">
        <form
          onSubmit={(e) => addCommentToFireStoreDocument(e, articleId)}
          className="comment-form"
        >
          <textarea
            type="text"
            value={commentText}
            onChange={(e) => setcommentText(e.target.value)}
            required
          />
          <ButtonGroup className="button-group">
            <Button
              size="small"
              variant="outlined"
              type="submit"
              disabled={!commentText.length > 0}
              className="btn btn-comment"
            >
              Add Comment
            </Button>
            <Button
              size="small"
              onClick={() => setshowCommentBox(false)}
              className="btn btn-cancel"
            >
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      </div>
    </Container>
  );
}
