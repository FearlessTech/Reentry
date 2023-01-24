import React from "react";
import styled from "styled-components";
import { UserImage } from "../../components/Image";
import { formatRelative } from "date-fns";
import { Link } from "react-router-dom";
import { isUrl, splitString, getExt } from "../../Posts/urlIdentifier";

const StMessage = styled.div`
  .top {
    display: flex;
    column-gap: 0.6rem;
    .image-wrapper {
      width: 45px;
      overflow: hidden;
      display: grid;
      place-items: center;
      border-radius: 100vmax;
      img {
        width: 100%;
      }
    }
    .meta {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 45px;
      padding-bottom: 0.2rem;
      .name {
        font-weight: 600;
        color: #074453;
        text-decoration: none;
      }
      .date {
        font-size: 12px;
      }
    }
  }
  .text {
    padding-left: 3.4rem;
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

  return (
    <StMessage>
      <div className="top">
        <div className="image-wrapper">
          <UserImage source={photoURL} />
        </div>
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
      </div>
      <div>
        <div className="text">
          {textList.map((word, i) => (
            <React.Fragment key={i}>
              {word.image ? (
                <>
                  <a href={word.text} target="_blank">
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
                  <a href={word.text} target="_blank">
                    {word.text}
                  </a>{" "}
                </>
              ) : (
                <>{word.text} </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </StMessage>
  );
};

export default Message;
