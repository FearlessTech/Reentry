import React from "react";
import "./notifications.css";
import "../jobs/job.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export const Notifications = () => {
  return (
    <div className="notification">
      <div className="left">
        <div className="leftDiv">
          <h1>Notifications</h1>
          <p>You have new notifications</p>
        </div>
        <hr />
        <div className="leftDiv">
          <p>Improve your notifications</p>
          <h1 className="blue">View settings</h1>
        </div>
      </div>

      <div className="middle">
        <div className="middleBoxes">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHkOOrvaumGKg/profile-displayphoto-shrink_800_800/0/1632887487394?e=1651104000&v=beta&t=bXD1T5wux94Tdi-GrI6Zm7L45JoNTRK5dNpksXpFndo"
            alt=""
          />
          <div className="Mcontent">
            <p>Your job alert for India</p>
            <button className="blue Bbutton">Connect</button>
          </div>

          <div className="dots">
            <p>1d</p>
            <MoreHorizIcon id="trdot" />
          </div>
        </div>
        <hr />

        <div className="middleBoxes">
          <img src="https://randomuser.me/api/portraits/men/94.jpg" alt="" />
          <div className="Mcontent">
            <p>Your job alert for USA</p>
            <button className="blue Bbutton">View Event</button>
          </div>

          <div className="dots">
            <p>1d</p>
            <MoreHorizIcon id="trdot" />
          </div>
        </div>
        <hr />

        <div className="middleBoxes">
          <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="" />
          <div className="Mcontent">
            <p>Your job alert for Germany</p>
            <button className="blue Bbutton">See all views</button>
          </div>

          <div className="dots">
            <p>1d</p>
            <MoreHorizIcon id="trdot" />
          </div>
        </div>
        <hr />

        <div className="middleBoxes">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHYRKYBeIM7Rg/profile-displayphoto-shrink_100_100/0/1642222680344?e=1651104000&v=beta&t=lJofr2NhWemgVoiK1h6bFuVVvteMebPllDY5FFsmHWk"
            alt=""
          />
          <div className="Mcontent">
            <p>Your job alert for Mumbai</p>
            <button className="blue Bbutton">View Event</button>
          </div>

          <div className="dots">
            <p>1d</p>
            <MoreHorizIcon id="trdot" />
          </div>
        </div>
        <hr />
      </div>

      <div className="right">
        <div className="RtopDiv">
          <div className="ads">
            {" "}
            <p>Ad</p> <MoreHorizIcon id="trdot" />
          </div>
          <p className="gray">
            100 years of Japanese innovation built to meet all your needs
          </p>
          <div className="right_img">
            <img
              className="circle"
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHYRKYBeIM7Rg/profile-displayphoto-shrink_100_100/0/1642222680344?e=1651104000&v=beta&t=lJofr2NhWemgVoiK1h6bFuVVvteMebPllDY5FFsmHWk"
              alt=""
            />
            <img
              src="https://media-exp1.licdn.com/dms/image/C510BAQEUO8H0EBcAVQ/company-logo_100_100/0/1543490756062?e=1654128000&v=beta&t=ZrRrKqq3xAnO6z_2i_eDgcaxj9z19cBvszX6BqUzkMY"
              alt=""
            />
          </div>
          <p>A powerhouse for all your printing needs!</p>
          <button className="blue Bbutton">Follow</button>
        </div>
        <div className="RbottomBox">
          <p>
            {" "}
            About | Accessibility | Help Center | Privarcy & Terms ⮟ | Ad
            Choices | Advertising | Business Services ⮟ | Get the Linkdin app |
            More
          </p>

          <div className="RBlink">
            <img
              src="https://www.adweek.com/wp-content/uploads/2019/06/linkedin-branding-CONTENT-2019-652x367.jpg"
              alt=""
            />
            <p> LinkedIn Corporation © 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
