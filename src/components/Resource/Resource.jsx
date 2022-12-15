import React from "react";
import "./resource.css";
import DescriptionIcon from "@material-ui/icons/Description";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

export const Resource = (props) => {
  return (
    <styleContainer className="resource">
      <div className="resource_left">
        <div className="leftT_box">
          <div className="L_box">
            <div className="L_logo">
              <img
                src="/images/tabIcon.png"
                alt=""
              />
            </div>
            <div className="L_name">My resources</div>
          </div>

          <div className="L_box" onClick="resourcePopup()">
            <div className="L_logo">
              <img
                src="/images/alertIcon.png"
                alt=""
              />
            </div>
            <div className="L_name">resource Alert</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="/images/salaryIcon.png"
                alt=""
              />
            </div>
            <div className="L_name">Salary</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="/images/skillAssIcon.png"
                alt=""
              />
            </div>
            <div className="L_name">Skill Assessment</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <DescriptionIcon />
            </div>
            <div className="L_name">Interview Prep</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="/images/resumeBuilderIcon.png"
                alt=""
              />
            </div>
            <div className="L_name">Resume Builder</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="/images/playIcon.png"
                alt=""
              />
            </div>
            <div className="L_name">resource Seeker Guidance</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="/images/settingsIcon.png"
                alt=""
              />
            </div>
            <div className="L_name">Application Settings</div>
          </div>
        </div>

        <div className="leftB_box">
          <div className="LB_logo">
            <img
              src="/images/postIcon.png"
              alt=""
            />
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
              <img
                src="/images/user.svg"
                alt=""
              />
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <img
                  src="/images/targetIcon.jpg"
                  alt=""
                />
                <p>Actively recruiting</p>
              </div>
              <div className="content_bottom">
                <p>Promoted</p>
              </div>
            </div>

            <div className="Mr_logo">
              <img
                className="hide"
                src="/images/privacyIcon.png"
                alt=""
              />
              <DeleteOutlineIcon />
            </div>
          </div>

          {/* ......start content........// */}
          <div className="middleB_div">
            <div className="Ml_logo">
              <img
                src="/images/user.svg"
                alt=""
              />
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <img
                  src="/images/targetIcon.jpg"
                  alt=""
                />
                <p>Actively recruition</p>
              </div>
              <div className="content_bottom">
                <p>Promoted</p>
              </div>
            </div>

            <div className="Mr_logo">
              <img
                src="/images/privacyIcon.png"
                alt=""
              />
              <DeleteOutlineIcon />
            </div>
          </div>

          {/* ......end content........// */}
          <div className="middleB_div">
            <div className="Ml_logo">
              <img
                src="/images/user.svg"
                alt=""
              />
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <img
                  src="/images/targetIcon.jpg"
                  alt=""
                />
                <p>Actively recruition</p>
              </div>
              <div className="content_bottom">
                <p>Promoted</p>
              </div>
            </div>

            <div className="Mr_logo">
              <img
                src="/images/privacyIcon.png"
                alt=""
              />
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

          <div className="RMdiv">
            <p>I want to improve my resume</p>
            <img
              src="/images/article-icon.png"
              alt=""
            />
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

      {/* <<<<<<<<<<<<togglemenu>>>>>>>>>>>>>>>>>> */}

      {/* <div className='toggleDiv'>
          <div onClick='togglemenu()'>
            <h1>ok</h1>
          </div>
        </div>

       <div className='popup'>
      <div className='popup-inner'>
        <button className='close-btn'>close</button>
        {props.children}
      </div>
       </div> */}
    </styleContainer>
  );
};

// export default resource;

{/* <h1>{resource.title}</h1>
<p>{resource.type}</p>
<p>{resource.location}</p> */}
