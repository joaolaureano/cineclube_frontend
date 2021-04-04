import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "70%",
      maxWidth: "900px",

      background: theme.palette.background.default,
      borderRadius: "25px 25px 0 0",

      marginTop: "-50px",
    },

    header: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "50%",

      marginTop: "-50px",

      background: theme.palette.primary.main,
    },

    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "stretch",
      height: "100vh",

      background: theme.palette.primary.main,
    },

    loginWrapper: {
      maxWidth: "600px",
    },

    text: {
      fontSize: 45,
      color: theme.palette.primary.dark,
    },

    subTitle: {
      margin: "0 28px 16px 28px",
    },

    placeholderLogo: {
      background: theme.palette.primary.dark,
      width: "160px",
      height: "90px",
    },
  })
);

export default useStyles;
