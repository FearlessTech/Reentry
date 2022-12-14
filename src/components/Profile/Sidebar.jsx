import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { Avatar } from "@mui/material";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { db } from "../../firebase";
export const SideBar = () => {
  const [enterposts, setenterPosts] = useState([]);

  useEffect(() => {
    db.collection("manullypost").onSnapshot((snapshot) => {
      setenterPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <div className="profile__details">
          <p>Edit public profile & URL</p>
          <p>
            <QuestionMarkIcon
              style={{
                fontSize: "18px",
                backgroundColor: "#494545",
                borderRadius: "50%",
                color: "#fff",
                padding: "2px",
              }}
            />
          </p>
        </div>
        <hr />

        <div className="profile__stats">
          <span>Who viewed your profile</span>
          <span className="stat__number">
            <QuestionMarkIcon
              style={{
                fontSize: "18px",
                backgroundColor: "#494545",
                borderRadius: "50%",
                color: "#fff",
                padding: "2px",
              }}
            />
          </span>
        </div>
      </div>

      <div className="sidebar__recent">
        <h3>People Also Viewed</h3>

        <div className="students_div">
          <div className="profiles_students">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQEHLAg0muPAaQ/profile-displayphoto-shrink_400_400/0/1594193533718?e=1651708800&v=beta&t=d1veYoblJ7kv9Cjmbga_XE-jkxOMvuA82Hfefru1GUw" />
          </div>
          <div className="profile_details1">
            <h4>Ankush Chimnani</h4>
            <p>SDE-1 at Masai School</p>
            <button>Message</button>
          </div>
        </div>

        <button className="last_button">Show More..</button>
      </div>
      <div className="sidebar__recent">
        <h3>People you may Know</h3>
        {enterposts.slice(0, 10).map((user, i) => {
          return (
            <div className="students_div" key={i}>
              <div className="profiles_students">
                <Avatar src={user.picture.large} />
              </div>
              <div className="profile_details1">
                <h4>
                  {user.name.title} {user.name.first} {user.name.last}
                </h4>
                <p>
                  {" "}
                  {user.location.city} {user.location.state}{" "}
                  {user.location.country}
                </p>
                <button>Connect</button>
                <hr />
              </div>
            </div>
          );
        })}

        <button className="last_button">Show More..</button>
      </div>
    </div>
  );
};
