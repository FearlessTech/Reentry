import React from "react";
import "./job.css";
import DescriptionIcon from "@material-ui/icons/Description";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
export const Job = (props) => {
  return (
    <styleContainer className="job">
      <div className="job_left">
        <div className="leftT_box">
          <div className="L_box">
            <div className="L_logo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/709/709631.png"
                alt=""
              />
            </div>
            <div className="L_name">My jobs</div>
          </div>

          <div className="L_box" onClick="jobPopup()">
            <div className="L_logo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2645/2645890.png"
                alt=""
              />
            </div>
            <div className="L_name">Job Alert</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/925/925748.png"
                alt=""
              />
            </div>
            <div className="L_name">Salary</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1302/1302946.png"
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
                src="https://cdn-icons-png.flaticon.com/128/16/16120.png"
                alt=""
              />
            </div>
            <div className="L_name">Resume Builder</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="https://cdn-icons-png.flaticon.com/128/152/152810.png"
                alt=""
              />
            </div>
            <div className="L_name">Job Seeker Guidance</div>
          </div>

          <div className="L_box">
            <div className="L_logo">
              <img
                src="https://cdn-icons.flaticon.com/png/128/3019/premium/3019014.png?token=exp=1645707451~hmac=6f027518d43e0d1f138c0cfa64eb29ef"
                alt=""
              />
            </div>
            <div className="L_name">Application Settings</div>
          </div>
        </div>

        <div className="leftB_box">
          <div className="LB_logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png"
              alt=""
            />
          </div>
          <div className="B_name">Post a free job</div>
        </div>
      </div>

      <div className="job_middle">
        <div className="middleT_div">
          <div className="MTcontent">
            <h1>Recent job searches</h1>
            <h3>
              google <span className="green">(1000 new)</span>
            </h3>
            <h5>India</h5>
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
                src="https://media-exp1.licdn.com/dms/image/C510BAQGVtAK62mGJ8A/company-logo_100_100/0/1559782826078?e=1653523200&v=beta&t=ouG4lf9Y9lPZ6Mk3WrrqiXUAUhmRWDwUVrLhjN5bUYc"
                alt=""
              />
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <img
                  src="https://t3.ftcdn.net/jpg/04/23/81/88/240_F_423818884_YHGiFwER6klH2OnRxUipaEyNabH6VIVt.jpg"
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
                className="hide"
                src="https://cdn-icons-png.flaticon.com/128/633/633655.png"
                alt=""
              />
              <DeleteOutlineIcon />
            </div>
          </div>

          {/* ......start content........// */}
          <div className="middleB_div">
            <div className="Ml_logo">
              <img
                src="https://media-exp1.licdn.com/dms/image/C510BAQGVtAK62mGJ8A/company-logo_100_100/0/1559782826078?e=1653523200&v=beta&t=ouG4lf9Y9lPZ6Mk3WrrqiXUAUhmRWDwUVrLhjN5bUYc"
                alt=""
              />
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <img
                  src="https://t3.ftcdn.net/jpg/04/23/81/88/240_F_423818884_YHGiFwER6klH2OnRxUipaEyNabH6VIVt.jpg"
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
                src="https://cdn-icons-png.flaticon.com/128/633/633655.png"
                alt=""
              />
              <DeleteOutlineIcon />
            </div>
          </div>

          {/* ......end content........// */}
          <div className="middleB_div">
            <div className="Ml_logo">
              <img
                src="https://media-exp1.licdn.com/dms/image/C510BAQGVtAK62mGJ8A/company-logo_100_100/0/1559782826078?e=1653523200&v=beta&t=ouG4lf9Y9lPZ6Mk3WrrqiXUAUhmRWDwUVrLhjN5bUYc"
                alt=""
              />
            </div>

            <div className="Mm_content">
              <h1>Account Manager</h1>
              <p>Digital Room</p>
              <p> Glendal, CA (On-site)</p>
              <div className="active_logo">
                <img
                  src="https://t3.ftcdn.net/jpg/04/23/81/88/240_F_423818884_YHGiFwER6klH2OnRxUipaEyNabH6VIVt.jpg"
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
                src="https://cdn-icons-png.flaticon.com/128/633/633655.png"
                alt=""
              />
              <DeleteOutlineIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="job_right">
        <div className="RtopBox">
          <div className="RTdiv">
            <h1>Job seeker guidance</h1>
            <p>Recommended based on your activity</p>
          </div>

          <div className="RMdiv">
            <p>I want to improve my resume</p>
            <img
              src="https://www.linkedin.com/dms/C4D0DAQFdDVwn9b17iA/learning-public-crop_60_100/0/1568251157263?m=AQIkNGUfnAUFrgAAAX8143kJ3VhfJQz_nfBIkfqCuDEgJSWu18-aGyYBYg&e=1645962974&v=beta&t=i-YTLu9DocWyO01hPS_KpCSYr0SnKSNh4o238tI9zPo"
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

// export default Job;
