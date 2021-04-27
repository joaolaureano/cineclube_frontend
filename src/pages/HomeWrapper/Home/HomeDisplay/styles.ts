import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return createStyles({
    root: {
      maxWidth: "700px",
      height: "100%",
      background: theme.palette.background.default,
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
      position: "fixed",
      top: 0,

      width: "100%",
      padding: "1.7rem 2rem 1.5rem 2rem",

      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      background: "inherit",
      boxShadow: "none",
    },

    logo: {
      height: "2.75rem",
    },

    content: {
      marginTop: "6.25rem",
    },

    cover: {
      width: "100%",
    },

    movieInfo: {
      marginTop: "1rem",
    },

    movieTitle: {
      fontSize: "1.8rem",
      fontWeight: 700,
      fontStyle: "italic",
      fontFamily: "Barlow Condensed, sans-serif",
      textTransform: "uppercase",
      marginBottom: "-0.1rem",
    },

    originalTitle: {
      fontSize: "0.93rem",
      fontWeight: 400,
      fontFamily: "Barlow Condensed, sans-serif",
      textTransform: "uppercase",
      marginBottom: "-0.1rem",
    },

    year: {
      fontSize: "0.93rem",
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontStyle: "italic",
      marginBottom: "1rem",
    },
    synopsis: {
      lineHeight: "1.4rem",
    },

    platforms: { padding: "1rem 0 0.75rem 0" },

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

    appBar: {
      top: "auto",
      bottom: 0,
    },

    bottomMenu: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      maxWidth: "700px",
      background: theme.palette.background.default,
    },
  });
});

export default useStyles;
