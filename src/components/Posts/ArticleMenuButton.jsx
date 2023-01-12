import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { db, storage } from "../../firebase";
import PostModal from "./PostModal";
import styles from "./Posts.module.css";

export function ArticleMenuButton({ articleText, articleId, fileType }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState("close");
  const open = Boolean(anchorEl);
  const [showMenu, setshowMenu] = useState(true);
  const handleEditClick = (e) => {
    setshowMenu(!showMenu);
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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function deleteArticle(articleId) {
    const articleRef = db.collection("articles").doc(articleId);
    const commentsRef = articleRef.collection("comments");

    const fileRef = fileType ? storage.refFromURL(fileType) : null;

    if (fileRef) {
      await fileRef.delete().then(() => {
        console.log("file deleted");
      });
    }
    await articleRef.delete().then(() => {
      console.log("article deleted");
    });
    commentsRef.get().then((querySnapshot) => {
      querySnapshot.docs.forEach((snapshot) => {
        snapshot.ref.delete();
      });
    });
  }

  return (
    <div>
      <IconButton
        className={styles.menu_button}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FaEllipsisH />
      </IconButton>
      <Menu
        id="long-menu"
        PaperProps={{
          style: {
            minWidth: 50,
            maxHeight: 100,
            fontSize: "10px",
          },
        }}
        className={styles.menu_items}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {showMenu && <MenuItem onClick={handleEditClick}>Edit</MenuItem>}

        <MenuItem onClick={() => deleteArticle(articleId)}>Delete</MenuItem>
        {showModal !== "close" && (
          <PostModal
            showModal={showModal}
            handleEditClick={handleEditClick}
            setShowModal={setShowModal}
            postText={articleText}
            postId={articleId}
            postMode="edit"
            handleClick={handleEditClick}
            setshowMenu={setshowMenu}
          />
        )}
      </Menu>
    </div>
  );
}
