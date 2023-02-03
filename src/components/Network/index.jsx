import { useRef, useState } from "react";
import Results, { Header } from "./networkComponents/Result";
import { Container } from "./styled";
import { UserImage } from "../components/Image";

import { useGetSentRequests, useGetReceivedRequests } from "./api/requests";

import {
  handleRejectRequest,
  handleAcceptRequest,
  handleCancelRequest,
} from "./api/handlers";

import { useGetResults } from "./api/search";

import { IoClose, IoCheckmark, IoSearch, IoFilter } from "react-icons/io5";

const Network = (props) => {
  // REFS
  const search = useRef();

  const [filters, setFilters] = useState(null);

  const [searchFlag, setSearchFlag] = useState(false);

  const receivedRequests = useGetReceivedRequests();

  const sentRequests = useGetSentRequests();

  const searchResults = useGetResults(
    filters,
    search.current?.value,
    searchFlag
  );

  return (
    <Container className="container">
      <div className="wrapper">
        <div className="left-box">
          <div className="left-content">
            <div className="header-container">
              <h1>Users Network</h1>
            </div>
            <div className="search-container">
              <div className="outline">
                <input
                  type="text"
                  placeholder="Search for users"
                  ref={search}
                />
              </div>
              <button
                className="search-btn"
                onClick={(e) => {
                  setSearchFlag(true);
                }}
              >
                <IoSearch className="icon" size={20} color="#d9d9d9" />
              </button>
            </div>
            <div className="sections">
              {receivedRequests && (
                <section className="section">
                  <div className="sections-header-container">
                    <h1>Requests</h1>
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
                              request?.photoURL ||
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
                                  request?.photoURL ||
                                  "https://via.placeholder.com/150"
                                }
                                alt=""
                              />
                            </div>
                            <div className="content-wrapper">
                              <div className="name">{request.name}</div>
                              <div className="bio">
                                {request.bio ? request.bio : "Hello There!"}
                              </div>
                            </div>
                          </div>
                        </span>

                        <div className="options">
                          <IoCheckmark
                            className="icon icon-accept"
                            onClick={async () => {
                              await handleAcceptRequest(request.email);
                            }}
                          />
                          <IoClose
                            className="icon icon-reject"
                            onClick={async () => {
                              await handleRejectRequest(request.email);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </section>
              )}
              {sentRequests ? (
                <section className="section">
                  <div className="sections-header-container">
                    <h1>Pending</h1>
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
                              request?.photoURL ||
                              "https://via.placeholder.com/150"
                            }
                            alt=""
                          />
                        </div>

                        <div className="middle">
                          <div className={`popup`}>
                            <div className="img-wrapper">
                              <img
                                src={
                                  request?.photoURL ||
                                  "https://via.placeholder.com/150"
                                }
                                alt=""
                              />
                            </div>
                            <div className="content-wrapper">
                              <div className="name">{request.name}</div>
                              <div className="bio">
                                {request.bio ? request.bio : "Hello there!"}
                              </div>
                            </div>
                          </div>
                          <span className="name">{request.name}</span>
                          <span className="status">pending</span>
                        </div>

                        <div className="options received">
                          <IoClose
                            className="icon icon-reject"
                            onClick={async () => {
                              await handleCancelRequest(request.email);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </section>
              ) : (
                <div>
                  <p>no results were found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <main className="main-panel">
          <div className="main-content">
            <div className="header-container">
              <Header
                flag={searchFlag}
                results={searchResults}
                search={search}
              />
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
              <Results users={searchResults} />
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Network;
