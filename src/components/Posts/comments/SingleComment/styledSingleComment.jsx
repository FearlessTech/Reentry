import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  padding: 10px;
  margin: 5px 15px 5px 15px;
  border-radius: 10px;
  .picture-wrapper {
    width: 50px;
    margin-right: 10px;
    img {
      border-radius: 5px;
      width: 100%;
    }
  }
  .comment-content-container {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .comment-edit-box {
      width: 100%;
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
