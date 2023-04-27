import { useRef, useState } from "react";
import { BiEdit, BiExit } from "react-icons/bi";
import Button from "../ProfileSaveButton";
import Container from "./styles";

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
                <Button>Save</Button>
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
