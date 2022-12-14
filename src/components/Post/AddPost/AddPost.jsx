import styled from "styled-components";
import React, { useState } from "react";
import { Paper, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PhotoSizeSelectActualIcon from "@material-ui/icons/PhotoSizeSelectActual";
import firebase from "firebase/compat/app";
import { db } from "../../../firebase";
import Styles from "./Style";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";
import { useNavigate } from "react-router-dom";

export function AddPost() {
  const nav = useNavigate();
  const direct = () => {
    nav("/profile");
  };
  const user = useSelector(selectUser);

  const classes = Styles();
  const [URL, setURL] = useState("");
  const [enterpost, setEnterpost] = useState("");

  const submitPost = (e) => {
    e.preventDefault();
    db.collection("enterpost").add({
      name: user.displayName,
      message: enterpost,
      photoUrl: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setEnterpost("");
  };

  return (
    <Paper className={classes.upload}>
      <div className={classes.upload__header}>
        <Avatar onClick={direct} src={user.photoURL} />
        <form className={classes.header__form} onSubmit={submitPost}>
          <input
            placeholder="Start a Add"
            value={enterpost}
            onChange={(e) => setEnterpost(e.target.value)}
          />
          <input id="upload-image" type="file" accept="image/*" hidden />
          <input id="upload-video" type="file" accept="video/*" hidden />
        </form>
      </div>
      <div className={classes.upload__media}>
        <label
          htmlFor={URL === "" ? "upload-image" : ""}
          className={classes.media__options}
        >
          <PhotoSizeSelectActualIcon
            style={{
              color: "#70b5f9",
            }}
          />
          <h4>Photo</h4>
        </label>
        <label
          htmlFor={URL === "" ? "upload-video" : ""}
          className={classes.media__options}
        >
          <YouTubeIcon style={{ color: "green" }} />
          <h4>Video</h4>
        </label>
        <div className={classes.media__options}>
          <EventNoteIcon style={{ color: "orange", fontSize: 30 }} />
          <h4>Event</h4>
        </div>
        <div className={classes.media__options}>
          <CalendarViewDayIcon style={{ color: "#f5987e" }} />
          <h4>Write article</h4>
        </div>
      </div>
    </Paper>
  );
}
