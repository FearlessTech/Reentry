import React from "react";
import styled from "styled-components";
import { formatRelative } from "date-fns";
import { UserImage } from "../../components/Image";

const StMessage = styled.div`
  .image-wrapper {
    width: 45px;
    img {
      width: 100%;
    }
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
      <div className="image-wrapper">
        <UserImage source={photoURL} />
      </div>
      {displayName ? <p>{displayName}</p> : null}
      {createdAt?.seconds ? (
        <span>
          {formatRelative(new Date(createdAt.seconds * 1000), new Date())}
        </span>
      ) : null}
      <p>{text}</p>
    </StMessage>
  );
};

export default Message;
