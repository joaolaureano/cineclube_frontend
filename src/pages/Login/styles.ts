import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      background: theme.palette.background.default,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "70%",
      borderRadius: "25px 25px 0 0",
      marginTop: "-50px",
    },

    header: {
      background: theme.palette.primary.main,
      height: "40%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "stretch",
    },

    text: {
      fontSize: 45,
    },
  })
);

export default useStyles;
