import "./LeftNetwork.css";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { MdOutlinePeople, MdGroups, MdPeople } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { CgHashtag } from "react-icons/cg";
export const LeftNetwork = () => {
  const [recent, setRecent] = useState(true);

  return (
    <div className="LeftBox">
      <h4>Manage my network</h4>

      <div className="data">
        <div className="info">
          <MdPeople size="25px" />
          <span>Connections</span>
          <div>560</div>
        </div>

        {recent ? (
          <>
            <div className="data">
              <div>
                <TiContacts size="25px" />
                <span>Contacts</span>
                <div>556</div>
              </div>
            </div>

            <div className="data">
              <div>
                <MdOutlinePeople size="25px" />
                <span>People I Follow</span>
                <div>410</div>
              </div>
            </div>
            <div className="data">
              <div>
                <MdGroups size="25px" />
                <span>Groups</span>
              </div>
            </div>
            <div className="data">
              <div>
                <BsCalendarDate size="25px" />
                <span>Events</span>
              </div>
            </div>

            <div className="data">
              <div>
                <RiPagesLine size="25px" />
                <span>Pages</span>

                <div>4</div>
              </div>
            </div>

            <div className="data">
              <div>
                <ImNewspaper size="25px" />
                <span>News</span>
              </div>
            </div>

            <div className="data">
              <div>
                <CgHashtag size="25px" />
                <span>Hashtag</span>

                <div>1</div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div>
          <button id="btn" onClick={() => setRecent(!recent)}>
            {recent ? (
              <span>
                Show less
                <FaAngleUp className="arrow" size="20px" />
              </span>
            ) : (
              <span>
                Show more
                <FaAngleDown size="20px" className="arrow" />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
