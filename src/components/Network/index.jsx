import { Container } from "./styled";
import {
  receivedRequests as RR,
  sentRequests as SR,
  searchResults as SRS,
  youMayKnow as MN,
} from "./api";
import { useEffect, useState } from "react";
import { IoClose, IoCheckmark, IoSearch, IoFilter } from "react-icons/io5";

const Network = (props) => {
  const [sentRequests, useSentRequests] = useState(SR);
  const [receivedRequests, setReceivedRequests] = useState(RR);
  const [searchRequest, setSearchRequest] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
  const [youMayKnow, setYouMayKnow] = useState(MN);

  return (
    <Container>
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
            <div className="sections">
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
              {searchResults ? (
                <h1>
                  Results For <span>{searchRequest}</span>
                </h1>
              ) : (
                <h1>People you may know</h1>
              )}
            </div>
            <div className="content">
              <div className="filters">
                <div className="filter">
                  <div className="filter-icon-wrapper">
                    <IoFilter size={20} />
                  </div>
                  <span className="filter-name">lorem ipsum</span>
                </div>
                <div className="filter">
                  <div className="filter-icon-wrapper">
                    <IoFilter size={20} />
                  </div>
                  <span className="filter-name">lorem ipsum</span>
                </div>
                <div className="filter">
                  <div className="filter-icon-wrapper">
                    <IoFilter size={20} />
                  </div>
                  <span className="filter-name">lorem ipsum</span>
                </div>
                <div className="filter">
                  <div className="filter-icon-wrapper">
                    <IoFilter size={20} />
                  </div>
                  <span className="filter-name">lorem ipsum</span>
                </div>
                <div className="filter">
                  <div className="filter-icon-wrapper">
                    <IoFilter size={20} />
                  </div>
                  <span className="filter-name">lorem ipsum</span>
                </div>
              </div>
              {searchResults ? (
                <div className="results">
                  {searchResults.map((user) => {
                    <div className="single-user">
                      <div className="pictute-wrapper">
                        <img src={user.image?.url} alt="user profile picture" />
                      </div>

                      <div className="text-content">
                        <div className="name-wrapper">
                          <span className="name">{user.name}</span>
                        </div>
                        <div className="bio-wrapper">
                          <span className="bio">{user.bio}</span>
                        </div>
                      </div>
                    </div>;
                  })}
                </div>
              ) : (
                <div className="results">
                  {youMayKnow.map((user) => (
                    <div className="single-user">
                      <div className="pictute-wrapper">
                        <img src={user.image?.url} alt="user profile picture" />
                      </div>

                      <div className="text-content">
                        <div className="name-wrapper">
                          <span className="name">{user.name}</span>
                        </div>
                        <div className="bio-wrapper">
                          <span className="bio">{user.bio}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Network;
