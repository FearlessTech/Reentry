import React, { useState, useEffect } from "react";
import styles from "./Resources.module.css";
import PostResourceBtn from "./ResourcesComponents/PostResourceBtn";
import ResourceOutput from "./ResourcesComponents/ResourceOutput";
import ResourcesItem from "./ResourcesComponents/ResourcesItem";
const Resources = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <form className={styles.searchForm} action="">
          {" "}
          <input
            placeholder="Search for resources"
            className={styles.searchInput}
            type="text"
          />
        </form>
        <PostResourceBtn />
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
    </div>
  );
};

export default Resources;
