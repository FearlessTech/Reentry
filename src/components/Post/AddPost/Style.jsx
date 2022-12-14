import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  upload: {
    width: "98%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "0 10px",
    borderRadius: 8,
    [theme.breakpoints.down("xs")]: {
      width: "94%",
      borderRadius: 8,
      border: 0,
    },
  },

  upload__header: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    padding: "15px 0 5px 0",
    cursor: "pointer",
  },

  header__form: {
    marginLeft: 10,
    flex: 1,
    height: 47,
    [theme.breakpoints.down("xs")]: {
      height: 42,
    },
    display: "flex",
    alignItems: "center",
    borderRadius: 999,
    border: "1px solid",
    borderColor:
      theme.palette.type === "dark"
        ? "rgba(225,225,225,0.1)"
        : "rgba(0,0,0,0.15)",
    overflow: "hidden",
    "& > .MuiSvgIcon-root": {
      marginLeft: 10,
    },

    "& > input": {
      cursor: "pointer",
      height: "100%",
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: "lightgrey",
      },
      flex: 1,
      border: 0,
      outlineWidth: 0,
      paddingLeft: 10,
      color: theme.palette.type === "dark" && "lightgrey",
      fontSize: 14,
      fontWeight: 400,
      backgroundColor: "transparent",
      "&::placeholder": {
        color: theme.palette.type === "dark" && "grey",
      },
    },
    "& > button": {
      height: "100%",
      display: "flex",
      alignItems: "center",
      padding: "0 15px",
      border: 0,
      outlineWidth: 0,
      backgroundColor: theme.palette.type === "dark" ? "#70b5f9" : "#0073b1",
      color: "white",
      cursor: "pointer",
      fontWeight: 600,
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: theme.palette.type === "dark" ? "#0073b1" : "#70b5f9",
      },
    },
  },

  upload__media: {
    height: 50,
    [theme.breakpoints.down("xs")]: {
      height: 40,
    },
    display: "flex",
    alignItems: "center",
    padding: "2px 0",
    opacity: 0.8,
  },

  media__options: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 4,
    transition: "all 0.4s ease",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "lightgrey",
    },
    "& > h4": {
      fontSize: 14,
      fontWeight: 400,
      marginLeft: 10,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  },
}));
