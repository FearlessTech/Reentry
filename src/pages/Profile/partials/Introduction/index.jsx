import { useRef, useState } from "react";

import styled from "styled-components";
import { BiEdit, BiExit } from "react-icons/bi";

const Container = styled.div`
  .introduction {
    .text {
      display: grid;
      grid-template-columns: 1fr max-content;
      width: 100%;
      form {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        gap: 1rem;

        textarea {
          width: 100%;
          resize: vertical;
          min-height: 70px;
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 1rem;
        }

        button {
          border: none;
          background-color: #077a7a;
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 0.4rem;

          :hover {
            background-color: #066e6e;
          }
        }
      }

      .saved-text {
      }
    }
  }
`;

function Introduction({ text = "hello world", setText = "" }) {
  const [edit, setEdit] = useState(false);
  const textField = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(textField.current.value);
  }

  return (
    <Container>
      <div
        className="introduction"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <div className="text">
          {edit ? (
            <>
              <form onSubmit={handleSubmit}>
                <textarea
                  ref={textField}
                  autoFocus
                  // value={text}
                  // onChange={(e) => setText(e.target.value)}
                />
                <button>save</button>
              </form>
              <BiExit
                size={20}
                color="#077a7a"
                onClick={() => setEdit(!edit)}
              />
            </>
          ) : (
            <div className="text">
              <div className="saved-text">{text}</div>
              <BiEdit
                size={20}
                color="#077a7a"
                onClick={() => setEdit(!edit)}
              />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Introduction;
