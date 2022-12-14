import React, { useEffect, useState } from "react";
import { Paper } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ErrorOutlineSharpIcon from "@material-ui/icons/ErrorOutlineSharp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Style from "./Style";

export const RightSide = () => {
  const classes = Style();
  const [expand, setExpand] = useState(false);
  const [days, setDays] = useState(1);
  const [readers, setReaders] = useState(1);

  useEffect(() => {
    setDays(Math.floor(Math.random() * 5));
    setReaders(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <div className={classes.widgets}>
      <Paper className={classes.widgets__top}>
        <div className={classes.heading}>
          <h4>LinkedIn News</h4>
          <ErrorOutlineSharpIcon />
        </div>
        {top_1.map((title, i) => (
          <div className={classes.headLine} key={`widgets-top_1_${i}`}>
            <div className={classes.top}>
              <FiberManualRecordIcon
                style={{
                  color: "gray",
                  fontSize: 12,
                }}
              />
              <h4>{title}</h4>
            </div>
            <div className={classes.bottom}>
              <h4>{days + Math.floor(Math.random() * 20)}d ago</h4>
              <FiberManualRecordIcon />
              <h4>{readers + Math.floor(Math.random() * 100)} readers</h4>
            </div>
          </div>
        ))}
        {expand &&
          top_2.map((title, i) => (
            <div className={classes.headLine} key={`widgets-top_1_${i}`}>
              <div className={classes.top}>
                <FiberManualRecordIcon
                  style={{
                    color: "gray",
                    fontSize: 12,
                  }}
                />
                <h4>{title}</h4>
              </div>
              <div className={classes.bottom}>
                <h4>{days + Math.floor(Math.random() * 20)}d ago</h4>
                <FiberManualRecordIcon />
                <h4>{readers + Math.floor(Math.random() * 100)} readers</h4>
              </div>
            </div>
          ))}
        <div className={classes.expand} onClick={() => setExpand(!expand)}>
          <h4>{expand ? "Show less" : "Show more"}</h4>
          <ExpandMoreIcon
            style={{ transform: expand ? "rotate(180deg)" : "" }}
          />
        </div>
      </Paper>
      <div className={classes.widgets__bottom}>
        <Paper className={classes.addBanner}>
          <img src="https://firebasestorage.googleapis.com/v0/b/linkedin-clone-3e412.appspot.com/o/job.png?alt=media&token=98fcfa8d-6795-4f57-8f36-13dcfd5cf1a2" />
        </Paper>
      </div>
    </div>
  );
};

const top_1 = [
  "Should we return to office?",
  "Where Indian millionaires live",
  "Startups set to give massive hikes",
  "What it means to be an ‘alpha male’",
  "How startups are retaining talent",
  "Boom period over for tech IPOs?",
];

const top_2 = [
  "What Gen Z wants",
  "Don't wear this to work",
  "Desi social apps take on biggies",
  "Consulting firms up C-level hiring",
];
