import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
export function CommentMenuButton({
  initateCommentEdit,
  commentText,
  seteditCommentText,
  commentId,
  deleteComment,
  allowEdit,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className="menu_button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FaEllipsisH />
      </IconButton>
      <Menu
        id="simple-menu"
        PaperProps={{
          style: {
            minWidth: 50,
            maxHeight: 100,
            fontSize: "10px",
          },
        }}
        className="menu_items"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {allowEdit && (
          <MenuItem
            onClick={() => {
              initateCommentEdit(true);
              seteditCommentText(commentText);
            }}
          >
            Edit
          </MenuItem>
        )}
        <MenuItem onClick={() => deleteComment(commentId)}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
