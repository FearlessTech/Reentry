import { useState } from "react";
import styled from "styled-components";
import { MdExpandMore, MdClose } from "react-icons/md";

const Container = styled.div`
  font-family: Inter, sans-serif;
  width: 100%;
  * {
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 300ms;
  }

  .header {
    height: 50px;
    background-color: #009999;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .content {
      height: 100%;
      width: 80%; // should be changed on responsive
      display: grid;
      grid-template-columns: 1fr max-content;
      margin: 0 auto;
      align-items: center;
      h2 {
        font-size: 1.8rem;
        color: #fff;
        font-weight: 500;
      }
      button {
        display: grid;
        place-items: center;
        .icon {
        }
      }
    }
  }
  .collapse-area {
    height: max-content;
    overflow-y: hidden;
    transition: height 300ms ease-in-out;
    padding: 1rem 0;
    margin-bottom: 0.4rem;

    &.collapsed {
      height: 0;
      padding: 0 0;
      transition: height 300ms ease-in-out;
    }
  }
`;

const Collapsable = ({ title = "Section name", children }) => {
  const [isClosed, setIsClosed] = useState(true);
  const Icon = isClosed ? MdExpandMore : MdClose;

  return (
    <Container>
      <div className="header">
        <div className="content">
          <h2>{title}</h2>
          <button onClick={() => setIsClosed(!isClosed)}>
            <Icon size={40} className="icon" color="#fff" />
          </button>
        </div>
      </div>
      <div className={`collapse-area ${isClosed && "collapsed"}`}>
        {children}
      </div>
    </Container>
  );
};

export default Collapsable;
