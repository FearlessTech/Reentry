import { useState, forwardRef } from "react";
import { HiSearch } from "react-icons/hi";
import Container from "./styles";
import { useRef } from "react";

const Searchbar = ({
  children,
  handleChange = () => {},
  handleSearch = () => {},
}) => {
  const textBox = useRef();
  const [onFocus, setOnFocus] = useState(false);

  function handleFocusChange(e) {
    if (!e.target.value.length) setOnFocus((state) => !state);
  }

  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(textBox.current.value);
        }}
      >
        <label htmlFor="search-input" tabIndex={1}>
          <button>
            <HiSearch
              className={`icon ${onFocus && "active"}`}
              color="#1c5c7e"
            />
          </button>
          <input
            onFocus={handleFocusChange}
            onBlur={handleFocusChange}
            id="search-input"
            name="search-input"
            type="text"
            placeholder={children}
            onChange={handleChange}
            ref={textBox}
            autoFocus
          />
        </label>
      </form>
    </Container>
  );
};

export default Searchbar;
