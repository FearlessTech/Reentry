import React from "react";
import { Link } from "react-router-dom";
import { UserImage } from "../../../../components/Image";
import Container from "./styles";

export default function ActorElement({ name, photoURL, lastMessage, uid }) {
  return (
    <Container>
      <Link to={`/messaging/${uid}`}>
        <div className="image-wrapper">
          <UserImage source={photoURL} />
        </div>
        <div className="right">
          <span className="name">{name}</span>
          <div className="last">
            <span>{lastMessage}</span>
          </div>
        </div>
      </Link>
    </Container>
  );
}
