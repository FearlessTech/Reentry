import React from "react";
import "./resource.css";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { IoIosBookmark, IoIosEyeOff } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { HiBellAlert } from "react-icons/hi2";
import {FiTarget} from "react-icons/fi";
export const Resource = (props) => {
  return (
    <styleContainer className="resource">
      <div className="resource_left">
        <div className="leftT_box">
          <div className="L_box">
            <div className="L_logo">
              <IoIosBookmark/>
            </div>
            <div className="L_name">My resources</div>
          </div>

          <div className="L_box" onClick="resourcePopup()">
            <div className="L_logo">
              <HiBellAlert/>
            </div>
            <div className="L_name">resource Alert</div>
          </div>
        </div>

        <div className="leftB_box">
          <div className="LB_logo">
            <IoCreateOutline />
          </div>
          <div className="B_name">Post a free resource</div>
        </div>
      </div>

      <div className="resource_middle">
        <div className="middleT_div">
          <div className="MTcontent">
            <h1>Recent searches</h1>
            <h3>
              google <span className="green">(1000 new)</span>
            </h3>
            <h5>Maine</h5>
          </div>
          <button className="clear_button">Clear</button>
        </div>
        {/* ....................middle heading/........ */}
        <div className="middleM_div">
          <h1>Recommended for you</h1>
          <p>Based on your profile and search history.</p>

          {/*.............middle bottom ...............*/}
          <div className="middleB_div">
            <div className="Ml_logo">
              <img src="/images/user.svg"alt=""/>
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <FiTarget />
                <p>Actively recruiting</p>
              </div>
              <div className="content_bottom">
                <p>Promoted</p>
              </div>
            </div>

            <div className="Mr_logo">
              <IoIosEyeOff className="hide"/>
              <DeleteOutlineIcon />
            </div>
          </div>

          {/* ......start content........// */}
          <div className="middleB_div">
            <div className="Ml_logo">
              <img src="/images/user.svg"alt=""/>
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <FiTarget />
                <p>Actively recruition</p>
              </div>
              <div className="content_bottom">
                <p>Promoted</p>
              </div>
            </div>

            <div className="Mr_logo">
              <IoIosEyeOff />
              <DeleteOutlineIcon />
            </div>
          </div>

          {/* ......end content........// */}
          <div className="middleB_div">
            <div className="Ml_logo">
              <img src="/images/user.svg"alt=""/>
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <FiTarget />
                <p>Actively recruition</p>
              </div>
              <div className="content_bottom">
                <p>Promoted</p>
              </div>
            </div>

            <div className="Mr_logo">
              <IoIosEyeOff />
              <DeleteOutlineIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="resource_right">
        <div className="RtopBox">
          <div className="RTdiv">
            <h1>resource seeker guidance</h1>
            <p>Recommended based on your activity</p>
          </div>

          <div className="RBdiv">
            <p>Show more &#8594; </p>
          </div>
        </div>

        <div className="RbottomBox">
          <p>
            {" "}
            About | Accessibility | Help Center | Privarcy & Terms ⮟ | Ad
            Choices | Advertising | Business Services ⮟ | Get the MaineRR app |
            More
          </p>

          <div className="RBlink">
            <img
              src="/images/RRLogo.png"
              alt=""
            />
            <p> Maine Reentry Resources © 2022</p>
          </div>
        </div>
      </div>

    </styleContainer>
  );
};

// export default resource;


