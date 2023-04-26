import React from "react";
import styled from "styled-components";
import { UserImage } from "../../../../components/Image";
import { formatRelative } from "date-fns";
import { Link } from "react-router-dom";
import {
  isUrl,
  splitString,
  getExt,
} from "../../../../components/Posts/urlIdentifier";

const StMessage = styled.div`
  box-sizing: border-box;
  display: flex;
  column-gap: 1rem;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding-right: 2rem;
  *::selection {
    background-color: #009999;
    color: white;
  }

  &.left {
    flex-direction: row-reverse;
    margin-right: 1rem;

    .text {
      justify-content: end;
      border-radius: 50px 0 50px 50px;

      .meta {
        align-items: flex-end;
      }
    }
  }
  .top {
    display: flex;
    align-items: center;
    .image-wrapper {
      width: 55px;
      overflow: hidden;
      display: grid;
      place-items: center;
      border-radius: 100vmax;
      img {
        width: 100%;
      }
      box-shadow: 0 0 10px #000000;
    }
  }
  .text {
    transform: translateY(50px);
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #dbdbdb;
    border-radius: 0 50px 50px 50px;
    padding: 2rem;
    box-shadow: 0 0 10px #00999999;
    max-width: 280px;
    .meta {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 35px;
      padding-bottom: 0.2rem;
      margin-bottom: 0.3rem;
      .name {
        font-weight: 600;
        color: #074453;
        text-decoration: none;
      }
      .date {
        font-size: 10px;
      }
    }
    .message {
      max-width: 90%;
      a {
        width: 90%;
        background-color: #009999;
        color: white;
        font-size: 12px;
      }
    }
    font-size: 15px;
    .image-wrapper {
      width: 150px;
      img {
        width: 100%;
      }
    }
  }
`;

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
  uid = "",
  current,
}) => {
  const textList = [];

  splitString(text).forEach((word) => {
    if (isUrl(word)) {
      if (getExt(word)) {
        return textList.push({ image: true, text: word, url: true });
      }
      return textList.push({ image: false, text: word, url: true });
    }
    return textList.push({ image: false, text: word, url: false });
  });

  const min = (text) => {
    return text.slice(0, 22) + "...";
  };

  return (
    <StMessage className={current ? "left" : ""}>
      <div className="top">
        <div className="image-wrapper">
          <UserImage source={photoURL} />
        </div>
      </div>
      <div>
        <div className="text">
          <div className="meta">
            {displayName ? (
              <Link className="name" to={`/messaging/${uid}`}>
                {displayName}
              </Link>
            ) : null}
            {createdAt?.seconds ? (
              <span className="date">
                {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
              </span>
            ) : null}
          </div>
          <div className="message">
            {textList.map((word, i) => (
              <React.Fragment key={i}>
                {word.image ? (
                  <>
                    <a href={word.text} target="_blank" rel="noreferrer">
                      <div className="image-wrapper">
                        <img
                          src={word.text}
                          alt=""
                          onError={(e) => {
                            e.target.remove();
                          }}
                        />
                      </div>
                    </a>{" "}
                  </>
                ) : word.url ? (
                  <>
                    <a href={word.text} target="_blank" rel="noreferrer">
                      {min(word.text)}
                    </a>{" "}
                  </>
                ) : (
                  <>{`${word.text}`}</>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </StMessage>
  );
};

export default Message;
