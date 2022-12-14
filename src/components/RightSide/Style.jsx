import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  headLine: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 10px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "lightgrey",
    },
  },
  top: {
    display: "flex",
    alignItems: "center",
    "& > h3": {
      fontSize: 16,
    },
    "& > h4": {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: 500,
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 18,
    },
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    marginTop: 5,
    paddingLeft: 22,
    "& > h4": {
      fontSize: 12,
      fontWeight: 400,
      color: "grey",
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 6,
      color: "grey",
      margin: "0 5px",
    },
  },
  heading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 15px",
    "& > h4": {
      fontSize: 15,
      fontWeight: 600,
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 16,
      color: "grey",
    },
  },
  expand: {
    width: "100%",
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "grey",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 13,
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "lightgrey",
    },
  },
  widgets__bottom: {
    position: "sticky",
    top: "8vh",
    marginTop: 10,
  },
  widgets: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "102%",
      borderRadius: 8,
      border: 0,
    },
  },
  widgets__top: {
    overflow: "hidden",
    borderRadius: 10,
  },
  addBanner: {
    width: "98%",
    display: "flex",
    padding: 5,
    borderRadius: 10,
    overFlow: "hidden",
    "& > img": {
      width: "100%",
      objectFit: "contain",
      borderRadius: 10,
      cursor: "pointer",
    },
  },
  about: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    "& > h4": {
      color: theme.palette.type === "dark" ? "#70b5f9" : "#0073b1",
    },
    "& > div": {
      flex: 1,
      width: "100%",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop: 10,
      "& > a": {
        color: "grey",
        transition: "all 0.4s ease",
        "&:hover": {
          color: theme.palette.type === "dark" ? "#5c5c5c" : "#363636",
        },
      },
    },
  },
}));
