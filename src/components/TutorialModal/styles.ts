import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      textAlign: "center",
      color: "blue",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalParent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "8px",
    },
    buttonIcon: {
      fontSize: "60px",
    },
    title: {
      fontSize: "1.2em",
    },
    content: {
      fontSize: "inherit",
    },
    tutorialButtons: {
      "& div": {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        "& *": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
      "& p": {
        color: theme.palette.text.primary,
      },
    },
  })
);

export default useStyles;
