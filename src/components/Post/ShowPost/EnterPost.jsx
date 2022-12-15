import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import SendIcon from "@material-ui/icons/Send";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import Style from "./Style";
import ReactTimeago from "react-timeago";
import { db } from "../../../firebase";
import ReactPlayer from "react-player";
import { FiThumbsUp } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export function EnterPost() {
  const classes = Style();
  const [active, setactive] = useState("");
  const [liked, setLiked] = useState(false);

  const [enterposts, setenterPosts] = useState([]);
  const [likesCount, setLikesCount] = useState(1);
  const [commentsCount, setCommentsCount] = useState(1);
  // const [thumsUpIconOrder, setThumsUpIconOrder] = useState(1);

  useEffect(() => {
    setLikesCount(Math.floor(Math.random() * 1000) + 1);
    setCommentsCount(Math.floor(Math.random() * 10) + 1);
    // setThumsUpIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    db.collection("enterpost")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setenterPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  const Reactions = ({ i }) => {
    return (
      <div className={classes.footer__stats}>
          <Row >
            <Col>
            {/* style={{ order: `${thumsUpIconOrder} ` }} */}
              <FiThumbsUp/>
              <p>{likesCount + Math.floor(Math.random() * 10) * i}</p>
            </Col>
            <Col>
              <p>{commentsCount + Math.floor(Math.random() * 100) + i} comments</p>
            </Col>
          </Row>
        
      </div>
    );
  };

  return (
    <div>
      {enterposts.map((user, i) => {
        return (
          <Paper className={classes.post} key={i}>
            <div className={classes.post__header}>
              <Avatar src={user.photoUrl} />
              <div className={classes.header__info}>
                <h4>{user.name}</h4>
                <p style={{ margin: 0 }}>
                  <ReactTimeago
                    date={new Date(user.timestamp?.toDate()).toUTCString()}
                    units="minute"
                  />
                </p>
              </div>
              <MoreHorizOutlinedIcon />
            </div>
            <div className={classes.post__body}>
              <div className={classes.body__description}>
                {user.message.length > 30 ? (
                  user.message.includes("www.youtube.com/watch") ? (
                    <ReactPlayer
                      url={user.message}
                      controls={true}
                      light={true}
                      style={{ height: "auto !important" }}
                    />
                  ) : (
                    <img src={user.message} style={{ width: "100%" }} alt=""/>
                  )
                ) : (
                  <p style={{ margin: 0 }}>{user.message}</p>
                )}
              </div>
            </div>
            <div className={classes.post__footer}>
              <Reactions i={i} />
              <div className={classes.footer__actions}>
                <div
                  className={classes.action__icons}
                  onClick={(e) => {
                    setLiked(!liked);
                  }}
                >
                  {liked ? (
                    <>
                      <ThumbUpAltIcon
                        style={{
                          transform: "scaleX(-1)",
                          color: "dodgerblue",
                          // fontSize: "20",
                        }}
                      />
                      <h4
                        style={{
                          color: liked ? "dodgerblue" : "gray",
                          fontWeight: liked ? "700" : "200",
                        }}
                      >
                        Like
                      </h4>
                    </>
                  ) : (
                    <>
                      <ThumbUpAltOutlinedIcon
                        style={{
                          transform: "scaleX(-1)",
                          color: "gray",
                          fontSize: "medium",
                        }}
                      />
                      <h4>Like</h4>
                    </>
                  )}
                </div>
                <div className={classes.action__icons}>
                  <CommentOutlinedIcon />
                  <h4>Comment</h4>
                </div>
                <div className={classes.action__icons}>
                  <ReplyOutlinedIcon style={{ transform: "scaleX(-1)" }} />
                  <h4>Share</h4>
                </div>
                <div className={classes.action__icons}>
                  <SendIcon style={{ transform: "rotate(-45deg)" }} />
                  <h4>Send</h4>
                </div>
              </div>
            </div>
          </Paper>
        );
      })}
    </div>
  );
}

export default EnterPost;
