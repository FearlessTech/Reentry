import React, { useState, useEffect } from "react";
import styles from "./Resources.module.css";
import ResourceOutput from "./ResourceOutput";
import ResourcesItem from "./ResourcesItem";
import { SearchResults } from "../Search/SearchResults";
import PostModal from "../Posts/PostModal";
import { ResourcePopup } from "./ResourcePopup";
const Resources = (props) => {
  const [showModal, setShowModal] = useState("close");

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
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <div className={styles.searchDiv}>
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
      <div className={styles.items}>
        <div className={styles.itemsBox}>
          <ResourcesItem />
          <ResourcesItem />
          <ResourcesItem />
          <ResourcesItem />
          <ResourcesItem />
          <ResourcesItem />
          <ResourcesItem />
          <ResourcesItem />
          <ResourcesItem />
        </div>
      </div>
      {showModal === "open" && (
        <ResourcePopup showModal={showModal} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Resources;
