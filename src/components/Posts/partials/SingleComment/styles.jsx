import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: whitesmoke;
  padding: 10px;
  margin: 5px 15px 5px 15px;
  border-radius: 10px;
  .picture-wrapper {
    margin-top: 0.3rem;
    width: 50px;
    margin-right: 10px;
    img {
      border-radius: 5px;
      width: 100%;
      font-size: 0;
    }
  }
  .comment-content-container {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .comment-edit-box {
      width: 100%;
      resize: vertical;
      border-radius: 5px;
      min-height: 50px;
      max-height: 200px;
      padding: 1rem;
      background-color: #ffffffb9;
      box-shadow: 0px 0px 2px #009999 inset;
      border: none;
      &:focus,
      &:focus-visible,
      &:focus-within {
        outline: none;
      }
    }

    .comment-content {
      .postedby {
        text-align: left;
        font-size: 0.8em;
      }
      .comment-text {
        text-align: left;
        font-size: 0.7em;
        margin: 0.3rem auto;
      }
      .publication-date {
        text-align: left;
        font-size: 0.5em;
      }
    }
  }
`;

export default Container;
