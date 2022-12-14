import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sidebarBottom: {
    position: "sticky",
    top: "8vh",
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },

  drop: {
    cursor: "pointer",
    padding: "5px 10px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "#5c5c5c" : "lightgrey",
    },
    "& > h3": {
      fontSize: 16,
    },
    "& > h4": {
      marginLeft: 10,
      fontSize: 14,
      fontWeight: 500,
      color: "grey",
    },
    "& > .MuiSvgIcon-root": {
      fontSize: 18,
    },
  },
  heading: {
    height: 40,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
    cursor: "pointer",
    "&:hover .MuiSvgIcon-root": {
      display: "block",
      transition: "all 0.4s ease",
      color: "grey",
      "&:hover": {
        borderRadius: 999,
      },
    },
    "& > .MuiSvgIcon-root": {
      transition: "all 0.4s ease",
      color: "grey",
      "&:hover": {
        borderRadius: 999,
      },
    },
    "& > h4": {
      fontSize: 13,
      fontWeight: 700,
      color: "#0073b1",

      transition: "all 0.4s ease",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },

  discover__more: {
    height: 45,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.4s ease",
    "& > h4": {
      fontSize: 14,
      fontWeight: 500,
    },
  },
}));
