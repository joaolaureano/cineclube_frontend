import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      maxWidth: "700px",
      height: "100%",
      background: theme.palette.background.default,
    },
    media: {
      height: 280,
    },
    hamburger: {
      float: "left",
    },
    director: {
      display: "inline-block",
    },
    cast: {
      display: "inline-block",
    },
    platforms: { padding: "8px 0 0 0" },
    platform: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    tags: {
      padding: "10px 0 0 0",
    },
    tag: {
      marginBottom: "8px",
      marginRight: "8px",
    },
    tinder: {
      position: "sticky",
    },
    appBar: {
      top: "auto",
      bottom: 0,
    },
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      height: "100%",
      paddingBottom: "65px",

      background: theme.palette.background.default,
    },
    topMenu: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    bottomMenu: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      maxWidth: "700px",
      background: theme.palette.background.default,
    },

    cover: {
      width: "100%",
    },
    movieInfo: {
      marginTop: "24px",
    },
    movieTitle: {
      marginBottom: "-4px",
    },
  });
});

export default useStyles;
