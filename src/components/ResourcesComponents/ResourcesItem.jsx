import styles from "./Resources.module.css";
const ResourcesItem = () => {
  return (
    <div className={styles.item}>
      <p className={styles.itemName}>Resource Type Available</p>
      <div className={styles.itemInfo}>
        <div className={styles.itemPicture}></div>
        <div className={styles.itemAboutBox}>
          <p className={styles.itemAbout}>
            Amount of resource description that wll fit in this div
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResourcesItem;
