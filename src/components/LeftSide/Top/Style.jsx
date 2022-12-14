import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sidebar: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    "& > .MuiAvatar-root": {
      width: "30%",
      height: "auto",
      border: "2px solid white",
      marginTop: -40,
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        width: "13%",
        marginTop: -20,
      },
    },
    "& > h4": {
      margin: "10px 0",
      cursor: "pointer",
    },
  },
  direct: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  cover: {
    width: "100%",
    height: "60px",
    [theme.breakpoints.down("sm")]: {
      height: 90,
    },
  },
  stats: {
    width: "100%",
    "& > *": { marginTop: 5 },
  },
  stat: {
    width: "90%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "grey",
    padding: "5px 10px",
    cursor: "pointer",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 14,
      fontWeight: 400,
      color: "grey",
    },
  },
  myItems: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    paddingLeft: 25,
  },
}));
