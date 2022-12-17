/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "./RightNetwork.css";
import { VscLink } from "react-icons/vsc";
export const RightNetwork = () => {
  const [yoo, setYoo] = useState(false);

  return (
    <div className="righton">
      <div id="invitations">
        <h5> Invitations</h5>
      </div>

      <div className="followreq">
        <div className="followpics">
          <img
            src="/images/user.svg"
            alt=""
          />

          <div className="followd">
            <a href="">Chad Kurts</a>
            <a href=""> Aspiring Developer</a>
            <a className="linkchain">
              <VscLink />
              <span>Baxter and 63 others</span>
            </a>
          </div>

          <div className="">
            <button className="ignore">Ignore</button>
            <button className="accept">Accept</button>
          </div>
        </div>

        <div className="followpics">
          <img
            src="/images/user.svg"
            alt=""
          />

          <div className="followd">
            <a href="">Art Thomas</a>
            <a href=""> Developer</a>
            <a className="linkchain">
              <VscLink />
              <span>Stanley and 13 others</span>
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
            src="/images/user.svg"
            alt=""
          />

          <div className="followd">
            <a href="">4-Leafs-Code</a>
            <a href=""> Jr Full Stack Developer </a>
            <a className="linkchain">
              <VscLink />
              <span>Albert and 36 others</span>
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
                src="/images/user.svg"
                alt=""
              />

              <div className="followd">
                <a href="">Boston Lee</a>
                <a href=""> Aspiring Developer</a>
                <a className="linkchain">
                  <VscLink />
                  <span>Clover and 63 others</span>
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
