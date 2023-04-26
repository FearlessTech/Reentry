import { useState } from "react";
import styled from "styled-components";

const Container = styled.label`
  &,
  * {
    transition: 350ms ease-in-out;
  }
  display: flex;
  align-items: center;
  column-gap: 1rem;
  user-select: none;
  .out {
    display: block;
    width: 50px;
    background-color: #ffffff;
    aspect-ratio: 6 / 3;
    border-radius: 100vmax;
    display: flex;
    align-items: center;
    padding: 0 3px;
    &.active {
      justify-content: flex-end;
      background-color: #077a7a;
      .dot {
        background-color: #ffffff;
      }
    }
    .dot {
      background-color: #077a7a;
      height: 80%;
      aspect-ratio: 1 / 1;
      border-radius: 100vmax;
    }
  }
`;

const Switch = ({ toggle, id, text }) => {
  const [active, setActive] = useState(false);
  return (
    <Container
      className="active"
      htmlFor={id}
      onPointerDown={(e) => {
        setActive((state) => !state);
        toggle((state) => !state);
      }}
    >
      {text && !text.after && <span>{text.message}</span>}
      <div className={`out ${active && "active"}`}>
        <div className="dot"></div>
      </div>
      {text && text.after && <span>{text.message}</span>}
    </Container>
  );
};

export default Switch;
