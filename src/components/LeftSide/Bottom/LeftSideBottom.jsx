import React, { useState } from "react";
import { Paper, Divider } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import Style from "./Style";

export const LeftSideBottom = () => {
  const classes = Style();
  const [recent, setRecent] = useState(true);
  const [groups, setGroups] = useState(true);
  const [hashTags, setHashTags] = useState(false);

  return (
    <Paper className={classes.sidebarBottom}>
      <section>
        <div className={classes.heading}>
          <h4>Recent</h4>
          <ExpandMoreIcon
            style={{
              transform: recent ? "rotate(180deg)" : "",
            }}
            onClick={() => setRecent(!recent)}
          />
        </div>
        {!recent ? (
          ""
        ) : (
          <>
            {sectionRecent.map((title, i) => (
              <div className={classes.drop} key={`recent-${i}`}>
                <h3>#</h3>
                <h4>{title}</h4>
              </div>
            ))}
          </>
        )}
      </section>
      <section>
        <div className={classes.heading}>
          <h4>Groups</h4>
          <ExpandMoreIcon
            style={{ transform: groups ? "rotate(180deg)" : "" }}
            onClick={() => setGroups(!groups)}
          />
        </div>
        {groups && (
          <>
            {sectionGroups.map((title, i) => (
              <div className={classes.drop} key={`groups-${i}`}>
                <PeopleIcon />
                <h4>{title}</h4>
              </div>
            ))}
          </>
        )}
      </section>

      <section>
        <div className={classes.heading}>
          <h4>Events</h4>
          <AddIcon />
        </div>
      </section>
      <section>
        <div className={classes.heading}>
          <h4>Followed Hashtags</h4>
          <ExpandMoreIcon
            style={{ transform: hashTags ? "rotate(180deg)" : "" }}
            onClick={() => setHashTags(!hashTags)}
          />
        </div>
        {hashTags && (
          <>
            {sectionHashTags.map((title, i) => (
              <div className={classes.drop} key={`hashtags-${i}`}>
                <h3>#</h3>
                <h4>{title}</h4>
              </div>
            ))}
          </>
        )}
      </section>
      <Divider />
      <div className={classes.discover__more}>
        <h4>Discover more</h4>
      </div>
    </Paper>
  );
};

const sectionRecent = ["markets", "india", "socialmedia", "mern-stack"];
const sectionGroups = [
  "React Training",
  "Full Stack Developer",
  "JavaScript Developer Community",
  "MongoDB ExpressJS",
];
const sectionHashTags = [
  "greentech",
  "careers",
  "entrepreneurship",
  "jobinterviews",
  "technology",
  "innovation",
];
