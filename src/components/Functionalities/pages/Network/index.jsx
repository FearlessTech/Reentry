import { Container } from "./styled";
import Navbar from "../../../Navbar";
import { receivedRequests as RR, sentRequests as SR } from "./api";
import { useState } from "react";
import { IoClose, IoCheckmark } from "react-icons/io5";

const Parallax = (props) => {
  const [sentRequests, useSentRequests] = useState(SR);
  const [receivedRequests, setReceivedRequests] = useState(RR);

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
            </div>
            <div className="sections">
              {sentRequests && (
                <section className="pending">
                  <div className="sections-header-container">
                    <h1>Pending</h1>
                  </div>
                  {sentRequests.map((request) => {
                    return (
                      <div className="request-container">
                        <div className="img-wrapper">
                          <img
                            src={
                              request?.image?.url ||
                              "https://via.placeholder.com/150"
                            }
                            alt=""
                          />
                        </div>

                        <span className="name">{request.name}</span>

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
                <div>
                  <div></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <main className="main-panel">
          <div className="main-content">
            <div className="header-container">
              <h1>
                Results For <span>Lorem Ipsum Dolor</span>
              </h1>
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Parallax;
