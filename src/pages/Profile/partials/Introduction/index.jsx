import { useContext, useRef, useState } from "react";
import { BiEdit, BiExit } from "react-icons/bi";
import Button from "../ProfileSaveButton";
import Container from "./styles";

function Introduction({ text, handler }) {
  const textField = useRef();

  const [edit, setEdit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handler(textField.current.value);
    handleToggle();
  }

  function handleToggle() {
    setEdit((state) => !state);
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleToggle();
    }
  };

  return (
    <Container>
      <div className="introduction">
        <div className="text">
          {edit ? (
            <>
              <form onSubmit={handleSubmit}>
                <textarea ref={textField} autoFocus />
                <Button>Save</Button>
              </form>
              <button onClick={handleToggle} onKeyDown={handleKeyDown}>
                <BiExit size={20} color="#077a7a" />
              </button>
            </>
          ) : (
            <div className="text">
              <div className="saved-text">{text}</div>
              <button onClick={handleToggle} onKeyDown={handleKeyDown}>
                <BiEdit size={20} color="#077a7a" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Introduction;
