import React from "react";
import styled from "styled-components";
import { UserImage } from "../../components/Image";
import { formatRelative } from "date-fns";

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
      }
      .date {
        font-size: 12px;
      }
    }
  }
  .text {
    padding-left: 3.4rem;
    font-size: 15px;
  }
`;

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  return (
    <StMessage>
      <div className="top">
        <div className="image-wrapper">
          <UserImage source={photoURL} />
        </div>
        <div className="meta">
          {displayName ? <p className="name">{displayName}</p> : null}
          {createdAt?.seconds ? (
            <span className="date">
              {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
            </span>
          ) : null}
        </div>
      </div>
      <p className="text">{text}</p>
    </StMessage>
  );
};

export default Message;
