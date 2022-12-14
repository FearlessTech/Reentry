import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LeftSideTop } from "./Top/LeftSideTop";
import { LeftSideBottom } from "./Bottom/LeftSideBottom";
import "./Leftstyle.css";
const Style = makeStyles((theme) => ({
  sidebar: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
}));

export const LeftSideComponents = () => {
  const classes = Style();
  return (
    <div className={classes.sidebar}>
      <LeftSideTop />
      <LeftSideBottom />
    </div>
  );
};