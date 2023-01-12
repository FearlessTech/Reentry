import { Container } from "./styled";
import Navbar from "../../../Navbar";
import { receivedRequests as RR, sentRequests as SR } from "./api";
import { useEffect, useState } from "react";
import { IoClose, IoCheckmark, IoSearch } from "react-icons/io5";

const Network = (props) => {
  const [sentRequests, useSentRequests] = useState(SR);
  const [receivedRequests, setReceivedRequests] = useState(RR);

  const [scrollPos, setScrollPos] = useState({
    start: true,
    end: false,
  });

  return (
    <Container>
      <Navbar />
      <div className="wrapper">
        <div className="left-box">
          <div className="left-content">
            <div className="header-container">
              <h1>Users Network</h1>
            </div>
            <div className="search-container">
              <div className="outline">
                <input type="text" placeholder="Search for users" />
              </div>
              <button
                className="search-btn"
                onClick={(e) => {
                  console.log("should search user");
                }}
              >
                <IoSearch className="icon" size={20} color="#d9d9d9" />
              </button>
            </div>
            <div
              className="sections"
              onScroll={(e) => {
                const calc = e.target.scrollHeight - e.target.offsetHeight;
                if (e.target.scrollTop === calc) {
                  setScrollPos(({ start, end }) => {
                    return { start, end: true };
                  });
                } else if (e.target.scrollTop === 0) {
                  setScrollPos(({ start, end }) => {
                    return { start: true, end };
                  });
                } else {
                  setScrollPos(() => {
                    return { start: false, end: false };
                  });
                }
              }}
            >
              <div
                className={`shadow-${
                  scrollPos.start ? "start" : scrollPos.end ? "end" : ""
                }`}
              ></div>
              {sentRequests && (
                <section className="section">
                  <div className="sections-header-container">
                    <h1>Requests</h1>
                  </div>
                  {sentRequests.map((request, i) => {
                    return (
                      <div
                        className="request-container"
                        key={`${request.name}-${i}`}
                      >
                        <div className="img-wrapper">
                          <img
                            src={
                              request?.image?.url ||
                              "https://via.placeholder.com/150"
                            }
                            alt=""
                          />
                        </div>

                        <span className="name">
                          {request.name}
                          <div className="popup">
                            <div className="img-wrapper">
                              <img
                                src={
                                  request.image?.url ||
                                  "https://via.placeholder.com/150"
                                }
                                alt=""
                              />
                            </div>
                            <div className="content-wrapper">
                              <div className="name">{request.name}</div>
                              <div className="bio">{request.bio}</div>
                            </div>
                          </div>
                        </span>

                        <div className="options">
                          <IoCheckmark className="icon icon-accept" />
                          <IoClose className="icon icon-reject" />
                        </div>
                      </div>
                    );
                  })}
                </section>
              )}
              {receivedRequests && (
                <section className="section">
                  <div className="sections-header-container">
                    <h1>Pending</h1>
                  </div>
                  {receivedRequests.map((request, i) => {
                    return (
                      <div
                        className="request-container"
                        key={`${request.name}-${i}`}
                      >
                        <div className="img-wrapper">
                          <img
                            src={
                              request.image?.url ||
                              "https://via.placeholder.com/150"
                            }
                            alt=""
                          />
                        </div>

                        <div className="middle">
                          <div className="popup">
                            <div className="img-wrapper">
                              <img
                                src={
                                  request.image?.url ||
                                  "https://via.placeholder.com/150"
                                }
                                alt=""
                              />
                            </div>
                            <div className="content-wrapper">
                              <div className="name">{request.name}</div>
                              <div className="bio">{request.bio}</div>
                            </div>
                          </div>
                          <span className="name">{request.name}</span>
                          <span className="status">pending</span>
                        </div>

                        <div className="options received">
                          <IoClose className="icon icon-reject" />
                        </div>
                      </div>
                    );
                  })}
                </section>
              )}
            </div>
          </div>
        </div>
        <main className="main-panel">
          <div className="main-content">
            <div className="header-container">
              <h1>
                Results For <span>Lorem Ipsum Dolor:</span>
              </h1>
            </div>
            <div className="content"></div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Network;
