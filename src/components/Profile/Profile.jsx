import React from "react";
import "./profile.css";
import { Avatar } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import EditIcon from "@material-ui/icons/Edit";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna";
import { useState, useEffect } from "react";
import { Popups } from "./Popups";
import { SideBar } from "./Sidebar";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import { selectUser } from "../Redux/userSlice";
export const Profile = () => {
  const user = useSelector(selectUser);

  const [isOpen, setIsOpen] = useState(false);
  const [likesCount, setLikesCount] = useState(1);
  const [followCount, setFollowCount] = useState(1);
  const [searchCount, setSearchCount] = useState(1);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setLikesCount(Math.floor(Math.random() * 1000) + 1);
    setSearchCount(Math.floor(Math.random() * 1000) + 1);
    setFollowCount(Math.floor(Math.random() * 1000) + 1);
  }, []);

  return (
    <>
      <div className="main_profile">
        <div className="profile_bar">
          <div className="profile_up">
            <img
              className="coverimg"
              src="https://media-exp1.licdn.com/dms/image/C4D16AQGRDWRtMa4Jhw/profile-displaybackgroundimage-shrink_350_1400/0/1632888002264?e=1651104000&v=beta&t=DSe4CUIPTyaKzJGqqayEnY0fy-N-Tcwc5FAyNxrNWF4"
            />
            <Avatar src={user.photoURL} />
            <h2>{user.displayName}</h2>
            <p>Software Engineer</p>
            <p>Masai School</p>
            <p>
              Bengaluru, Karnataka, India <span>Contact info</span>
            </p>
            <div className="followers">
              <p>
                {followCount + Math.floor(Math.random() * 100)} followers - 500+
                connections
              </p>
              <div className="follow_button">
                <button className="button">Open to</button>
                <button className="Add_profile_btn ">
                  {" "}
                  Add profile section
                </button>
                <button className="button2">More</button>
              </div>
            </div>
          </div>
          <div className="profile_down">
            <div className="profile_down_content">
              <div className="profile_down_content_left">
                <h3>Analytics</h3>
                <p>
                  <VisibilityIcon
                    style={{
                      color: "#8a8c8d",
                    }}
                  />
                  Private to you
                </p>
              </div>
              <div className="profile_down_views">
                <div className="profile_views">
                  <h4>
                    <PeopleAltIcon
                      style={{
                        color: "#66696b",
                      }}
                    />
                    {likesCount + Math.floor(Math.random() * 100)} profile views
                  </h4>
                  <p>Discover who's viewed your profile.</p>
                </div>
                <div className="profile_views">
                  <h4>
                    <TrendingUpIcon
                      style={{
                        color: "#58595a",
                      }}
                    />
                    {likesCount + Math.floor(Math.random() * 10)} video views
                  </h4>
                  <p>Check out who's engaging with your videos.</p>
                </div>
                <div className="profile_views">
                  <h4>
                    <SearchIcon
                      style={{
                        color: "#666869",
                      }}
                    />
                    {likesCount + Math.floor(Math.random())} search appearances
                  </h4>
                  <p>See how often you appear in search results.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="profile_down">
            <div className="profile_down_content_left">
              <h3>Resources</h3>
              <p>
                <VisibilityIcon
                  style={{
                    color: "#8a8c8d",
                  }}
                />
                Private to you
              </p>
            </div>
            <div className="profile_down_views">
              <div className="profile_views">
                <h4>
                  <SettingsInputAntennaIcon
                    style={{
                      color: "#66696b",
                    }}
                  />
                  Creator Mode on{" "}
                </h4>
                <p>
                  Get discovered, showcase content on your profile, and get
                  access to creator tools
                </p>
              </div>
            </div>
            <div className="profile_down_views">
              <div className="profile_views">
                <h4>
                  <PeopleAltIcon
                    style={{
                      color: "#66696b",
                    }}
                  />
                  My Network
                </h4>
                <p>See and manage your connections and interests</p>
              </div>
            </div>
            <button className="see_all">See all 5 resources</button>
          </div>
          <div className="profile_down">
            <div className="profile_down_content_left1">
              <div className="popup_view">
                <h3>About</h3>
                <EditIcon
                  id="input"
                  type="button"
                  value="Edit"
                  onClick={togglePopup}
                />
                {/* <input type="button" value="Edit" onClick={togglePopup} /> */}
                <p>
                  {`My name is ${user.displayName} and currently, I am learning MERN Stack web
                  development. Skilled in HTML, CSS, Bootstrap, JavaScript,
                  NodeJS, Express, MongoDB, Postman, Git, GitHub, and React JS.
                  Highly passionate about building web applications and always
                  enthusiastic about learning new things.`}
                </p>
                {isOpen && (
                  <Popups
                    content={
                      <>
                        <b>About</b>
                        <p>
                          {`My name is ${user.displayName} and currently, I am learning MERN Stack web
                  development. Skilled in HTML, CSS, Bootstrap, JavaScript,
                  NodeJS, Express, MongoDB, Postman, Git, GitHub, and React JS.
                  Highly passionate about building web applications and always
                  enthusiastic about learning new things.`}
                        </p>
                        <button>Edit Section</button>
                      </>
                    }
                    handleClose={togglePopup}
                  />
                )}
              </div>

              <button className="see_all">See More...</button>
            </div>
          </div>
          <div className="profile_down">
            <div className="profile_add">
              <h3>Education</h3>
              <button>
                <AddIcon />
              </button>
            </div>
            <div className="profile_down_views2">
              <img src="https://media-exp1.licdn.com/dms/image/C560BAQG-DVu64TnfaQ/company-logo_100_100/0/1620381956947?e=1654128000&v=beta&t=V8ZociSuDmpf01yaqW5L4lZhYamK1vTAArYb-8svPdM" />
              <div>
                <h3>Masai School</h3>
                <p>Aspiring Full Stack Web Developer, CS/IT </p>
                <p>Jul 2021 - Feb 2022</p>
              </div>
            </div>
            <hr />
            <div className="profile_down_views2">
              <img src="https://www.mmcoe.edu.in/images/mmcoe-logo.jpg" />
              <div>
                <h3>
                  Marathwada Mitra Mandal's College of Engineering Pune 52
                </h3>
                <p>Bachelor of Engineering - BE, Mechanical </p>
                <p>Jul 2018 - June 2021</p>
              </div>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </>
  );
};
