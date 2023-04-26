import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { UserImage } from "../../../components/Image";

const StActorElement = styled.div`
  a {
    display: flex;
    column-gap: 1rem;
    align-items: flex-start;
    padding-top: 0.2rem;
    background-color: #d5d5d5;
    padding: 0.2rem 0.8rem;
    text-decoration: none;
    .image-wrapper {
      width: 60px;
      overflow: hidden;
      border-radius: 100vmax;
      display: grid;
      place-items: center;
      img {
        width: 100%;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      row-gap: 0.2rem;
      .name {
        font-size: 14px;
        font-weight: 600;
        color: #074453;
      }
      .last {
        span {
          font-size: 12px;
          color: #545454;
        }
      }
    }
  }
`;

export default function ActorElement({ name, photoURL, lastMessage, uid }) {
  return (
    <StActorElement>
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
    </StActorElement>
  );
}
