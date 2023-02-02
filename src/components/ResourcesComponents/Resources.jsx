import React, { useState } from "react";
import styles from "./Resources.module.css";
import ResourceOutput from "./ResourceOutput";
import ResourceItem from "./ResourceItem";
import { SearchResults } from "../Search/SearchResults";
import { ResourcePopup } from "./ResourcePopup";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  column-gap: 3rem;
  padding: 2rem;
  flex-wrap: wrap;
  max-width: 100%;
  outline: 1px solid red;

  &,
  * {
    box-sizing: border-box;
    font-family: Inter, sans-serif;
  }

  .search-box {
    flex: 0 1 300px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-top: 3rem;
    background-color: #d9d9d9;
    margin: 1rem auto;
    max-width: 100%;

    .search-container {
      .resource-search {
        display: flex;
        align-items: center;
        flex-direction: column;
        .search-bar {
          position: relative;
          width: 100%;
          .input-container {
            width: 100%;
            input {
              width: 100%;
            }
          }
          .icon-wrapper {
          }
        }
        .search-results {
          background-color: #fff;
          width: 100%;
          padding: 1rem;
          height: max-content;
          position: absolute;
          top: 35px;
        }
      }
    }
  }
  .items {
    flex: 1 1 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 0;
    }
    .items-wrapper {
      margin: auto;
      background-color: #d9d9d9;
      display: flex;
      flex-wrap: wrap;
      padding: 1rem;
      column-gap: 1.4rem;
      row-gap: 1rem;
    }
  }
  @media (max-width: 600px) {
    padding: 0;
    row-gap: 1rem;
    .search-box {
      flex-grow: 1;
    }
    .items {
      margin-top: 2rem;
      padding-bottom: 2rem;
    }
  }
`;

const Resources = (props) => {
  const [showModal, setShowModal] = useState("close");

  const resources = [
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
    {
      resourceImage: "https://via.placeholder.com/200",
      resourceType: "Resource Type Available",
      description: "Amount of resource description that wll fit in this div",
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };

  return (
    <Container className="screen-size">
      <div className="search-box">
        <div className="search-container">
          <SearchResults />
        </div>

        <button
          className={styles.postResource}
          onClick={handleClick}
          disabled={!!props.loading}
        >
          Post a Resource
        </button>
        <div className={styles.resourcesOutputBox}>
          <ResourceOutput />
          <ResourceOutput />
          <ResourceOutput />
          <ResourceOutput />
        </div>
      </div>
      <div className="items">
        <div className="items-wrapper">
          {resources.map(({ resourceType, resourceImage, description }, i) => {
            return (
              <ResourceItem
                key={`${resourceType} ${i}`}
                type={resourceType}
                imageSrc={resourceImage}
                description={description}
              />
            );
          })}
        </div>
      </div>
      {showModal === "open" && (
        <ResourcePopup showModal={showModal} handleClick={handleClick} />
      )}
    </Container>
  );
};

export default Resources;
