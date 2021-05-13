import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      height: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      width: "100vw",
      height: "10%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingLeft: "10px",
      marginBottom: "5%",
    },
    backIconContainer: {
      display: "flex",
      justifySelf: "flex-start",
    },
    textContainer: {
      display: "flex",
      alignSelf: "center",
      margin: "auto",
    },
    paragraph: {
      fontSize: "1rem",
      fontWeight: 500,
      marginBottom: "10px",
    },
    platformIcon: {
      display: "flex",
      marginRight: "3px",
    },
    listPlatform: {
      display: "flex",
    },
    contentWrapper: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    divider: {
      marginBottom: "20px",
      marginTop: "25px",
      height: "2px",
    },
    listTag: {
      display: "flex",
    },
    expandIconContainer: {
      marginLeft: "auto",
    },
    tagListHeader: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default useStyles;
