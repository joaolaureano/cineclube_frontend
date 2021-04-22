import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

    topContent: {
      display: "flex",
      justifyContent: "space-between",
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

    closeIcon: {
      marginTop: "-5px",
      marginRight: "-8px",
      padding: 0,
    },
  })
);

export default useStyles;
