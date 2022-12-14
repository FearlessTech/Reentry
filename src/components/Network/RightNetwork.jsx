import { useState } from "react";
import "./RightNetwork.css";
import { VscLink } from "react-icons/vsc";
export const RightNetwork = () => {
  const [yoo, setYoo] = useState(false);

  return (
    <div className="righton">
      <div id="invitations">
        <div> Invitations</div>

        <div id="seeall"> See all 4</div>
      </div>

      <div className="followreq">
        <div className="followpics">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQEiYYX-9JkHGQ/profile-displayphoto-shrink_400_400/0/1623167655526?e=1651104000&v=beta&t=jAjHYhHRBnWet6NAfzFDk5rORahZ-fC62Aq_c91oUtY"
            alt=""
          />

          <div className="followd">
            <a href="">Chandan kumar</a>
            <a href=""> Aspiring Developer</a>
            <a className="linkchain">
              <VscLink />
              <span>vivek and 63 others</span>
            </a>
          </div>

          <div className="ignore">
            <button>Ignore</button>
          </div>
          <div className="acceptbtn">
            <button>Accept</button>
          </div>
        </div>

        <div className="followpics">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHQfjr-etiYlQ/profile-displayphoto-shrink_100_100/0/1628232322363?e=1651104000&v=beta&t=uDnmCp4F4lNo-EC0BLQmg4BbxrYTk4-jN6rBk96ivAg"
            alt=""
          />

          <div className="followd">
            <a href="">Arjun Thakur</a>
            <a href=""> Developer</a>
            <a className="linkchain">
              <VscLink />
              <span>keshav and 13 others</span>
            </a>
          </div>

          <div className="ignore">
            <button>Ignore</button>
          </div>
          <div className="acceptbtn">
            <button>Accept</button>
          </div>
        </div>

        <div className="followpics">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5103AQGBIueSWAkHkw/profile-displayphoto-shrink_400_400/0/1564266187183?e=1651104000&v=beta&t=igM9N-8sqZnF9UWDRo6nTrERZ4i4kwQZ9zIGhVpB7GY"
            alt=""
          />

          <div className="followd">
            <a href="">Nrupul Dev</a>
            <a href=""> CTO at Masai </a>
            <a className="linkchain">
              <VscLink />
              <span>Ankur and 36 others</span>
            </a>
          </div>

          <div className="ignore">
            <button>Ignore</button>
          </div>
          <div className="acceptbtn">
            <button>Accept</button>
          </div>
        </div>

        {yoo ? (
          <>
            <div className="followpics">
              <img
                src="https://media-exp1.licdn.com/dms/image/D4D35AQERUorcmMYgyA/profile-framedphoto-shrink_100_100/0/1645642280009?e=1645952400&v=beta&t=pHIIKTC918A8wtytVjx5a1iaXGnbedpKSoRMvhfIpFI"
                alt=""
              />

              <div className="followd">
                <a href="">Sutin kumar</a>
                <a href=""> Aspiring Developer</a>
                <a className="linkchain">
                  <VscLink />
                  <span>vivek and 63 others</span>
                </a>
              </div>

              <div className="ignore">
                <button>Ignore</button>
              </div>
              <div className="acceptbtn">
                <button>Accept</button>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div id="heyyy" onClick={() => setYoo(!yoo)}>
          <div>{yoo ? <span>Show less</span> : <span>Show more</span>}</div>
        </div>
      </div>
    </div>
  );
};
