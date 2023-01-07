import { useState } from "react";
import db from "../firebase";

export function AddComment({ articleId, setshowCommentBox }) {
  const [commentText, setcommentText] = useState("");

  async function addCommentToFireStoreDocument(e, articleId) {
    e.preventDefault();
    const timestamp = new Date();
    const comment = {
      text: commentText,
      postedBy: "Ashwary",
      timestamp: timestamp,
    };

    const articleRef = db.collection("articles").doc(articleId);
    const commentsRef = articleRef.collection("comments");
    const response = await commentsRef.add(comment);

    setshowCommentBox(false);
  }

  return (
    <div style={{ display: "flex", width: "auto", padding: "1%" }}>
      <div>
        <img
          src="https://surgeinstitute.org/wp-content/uploads/2015/04/Facebook-no-profile-picture-icon-620x389.jpg"
          alt=""
          width="40px"
          height="40px"
          style={{ borderRadius: "5px" }}
        />
      </div>
      <div style={{ width: "100%" }}>
        <form onSubmit={(e) => addCommentToFireStoreDocument(e, articleId)}>
          <textarea
            style={{ width: "95%" }}
            type="text"
            value={commentText}
            onChange={(e) => setcommentText(e.target.value)}
            required
          />

          <button
            style={{ alignSelf: "start" }}
            type="submit"
            disabled={!commentText.length > 0}
          >
            Add Comment
          </button>
          <button onClick={() => setshowCommentBox(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
