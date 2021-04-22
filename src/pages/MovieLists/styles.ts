import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
      minHeight: "100vh",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      background:
        "linear-gradient(45deg, rgba(206,124,44,1) 0%, rgba(224,131,20,1) 50%, rgba(206,124,44,1) 100%)",
    },

    header: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      padding: "8px 0",
    },

    backIcon: {
      position: "absolute",
      left: "0",
    },

    tabsContainer: {
      margin: "8px 5%",
    },

    tabs: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      justifySelf: "center",
      width: "clamp(200px, 100%, 600px)",
    },

    tab: {
      color: theme.palette.text.primary,
      width: "50%",
    },

    movieList: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      marginTop: "24px",
    },

    movieItem: {
      display: "flex",
      width: "100%",
      minHeight: "120px",
      border: "none",

      "&:not(:first-child)": {
        marginTop: "8px",
      },
    },

    movieCover: {
      height: "auto",
      width: "84px",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      padding: "4px 8px",
    },

    bottomContent: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
    },

    platforms: {},

    platformIcons: {
      display: "flex",
    },
    platformIcon: {
      width: "32px",
      height: "32px",
      "&:not(:first-child)": {
        marginLeft: "4px",
      },
    },

    bottomIcons: {},

    icon: {
      padding: "4px",
    },
  })
);

export default useStyles;
