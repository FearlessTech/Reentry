import db from "../firebase";

export function AllComments({ comments }) {
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

  return (
    <>
      <p style={{ textAlign: "left", marginLeft: "15px" }}>Comments:</p>
      {comments.map((comment) => (
        <div style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFDD0", padding: "10px", margin: "5px 15px 5px 15px" }}>
          <div>
            <img
              src="https://surgeinstitute.org/wp-content/uploads/2015/04/Facebook-no-profile-picture-icon-620x389.jpg"
              alt=""
              width="40px"
              height="40px"
              style={{ marginRight: "10px", borderRadius: "5px" }}
            />
          </div>
          <div>
            <p style={{ textAlign: "left", fontSize: "0.8em" }}>{comment.postedBy}</p>
            <p style={{ textAlign: "left", fontSize: "0.7em" }}>{comment.text}</p>
            <p style={{ textAlign: "left", fontSize: "0.5em" }}>{getTimeString(comment)}</p>
          </div>
        </div>
      ))}
    </>
  );
}
