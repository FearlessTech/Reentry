import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import SendIcon from "@material-ui/icons/Send";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import Style from "./Style";
import ReactTimeago from "react-timeago";
import { db } from "../../../firebase";

function ShowPost() {
  const classes = Style();
  const [posts, setPosts] = useState([]);
  const [likesCount, setLikesCount] = useState(1);
  const [commentsCount, setCommentsCount] = useState(1);
  const [heartIcontOrder, setHeartIcontOrder] = useState(1);
  const [smileIconOrder, setSmileIconOrder] = useState(1);
  const [thumsUpIconOrder, setThumsUpIconOrder] = useState(1);

  useEffect(() => {
    setLikesCount(Math.floor(Math.random() * 1000) + 1);
    setCommentsCount(Math.floor(Math.random() * 10) + 1);
    setHeartIcontOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    setSmileIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    setThumsUpIconOrder(Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    db.collection("manullypost").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const Reactions = ({ i }) => {
    return (
      <div className={classes.footer__stats}>
        <div>
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt="linked-in-reaction-1"
            style={{ order: `${heartIcontOrder} ` }}
          />
          <img
            src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97"
            alt="linked-in-reaction-2"
            style={{ order: `${smileIconOrder} ` }}
          />
          <img
            src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"
            alt="linked-in-reaction-3"
            style={{ order: `${thumsUpIconOrder} ` }}
          />
        </div>
        <h4>{likesCount + Math.floor(Math.random() * 100) + i}</h4>
        <FiberManualRecordRoundedIcon
          style={{ fontSize: 8, color: "grey", paddingLeft: "3px" }}
        />
        <h4>{commentsCount + Math.floor(Math.random() * 100) + i} comments</h4>
      </div>
    );
  };
  const datefun = () => {
    var date = "1645776626078";
    var d = new Date(parseInt(date, 10));
    var ds = d.toString("MM/dd/yy HH:mm:ss");
    return ds;
  };
  return (
    <div>
      {posts.map((user, i) => {
        return (
          <Paper className={classes.post} key={i}>
            <div className={classes.post__header}>
              <Avatar src={user.picture.large} />
              <div className={classes.header__info}>
                <h4>
                  {user.name.title} {user.name.first} {user.name.last}
                </h4>
                <p style={{ margin: 0 }}>
                  <ReactTimeago
                    date={new Date(datefun()).toUTCString()}
                    units="minute"
                  />
                </p>
              </div>
              <MoreHorizOutlinedIcon />
            </div>
            <div className={classes.post__body}>
              <div className={classes.body__description}>
                <p style={{ margin: 0 }}>
                  {user.location.city} {user.location.state}{" "}
                  {user.location.country}
                </p>
              </div>
            </div>
            <div className={classes.post__footer}>
              <Reactions i={i} />
              <div className={classes.footer__actions}>
                <div className={classes.action__icons}>
                  <ThumbUpAltOutlinedIcon style={{ transform: "scaleX(-1)" }} />
                  <h4>Like</h4>
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

export default ShowPost;
