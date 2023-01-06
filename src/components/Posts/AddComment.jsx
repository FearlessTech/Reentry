import { Button, ButtonGroup } from "@material-ui/core";
import { useState } from "react";
import db, { auth } from "../../firebase";

export function AddComment({ articleId, setshowCommentBox }) {
  const [commentText, setcommentText] = useState("");
  const user = auth.currentUser;
  console.log(user);
  async function addCommentToFireStoreDocument(e, articleId) {
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
    <div style={{ display: "flex", width: "auto", padding: "1%" }}>
      <div>
        <img src={user.photoURL} alt="commenter profile picture" width="40px" height="40px" style={{ borderRadius: "5px" }} />
      </div>
      <div style={{ width: "100%" }}>
        <form onSubmit={(e) => addCommentToFireStoreDocument(e, articleId)} style={{ display: "flex", flexDirection: "column" }}>
          <textarea style={{ width: "95%" }} type="text" value={commentText} onChange={(e) => setcommentText(e.target.value)} required />
          <ButtonGroup style={{ justifyContent: "flex-end", width: "95%", marginTop: "5px" }}>
            <Button
              size="small"
              variant="outlined"
              style={{ alignSelf: "start", backgroundColor: "#88BBD6", marginRight: "5px", border: "none" }}
              type="submit"
              disabled={!commentText.length > 0}
            >
              Add Comment
            </Button>
            <Button size="small" style={{ border: "none" }} onClick={() => setshowCommentBox(false)}>
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
}
