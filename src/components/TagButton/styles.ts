import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      width: "47%",
      // lineHeight: "47%"
      display: "inline-flex",
      alignItems: "center",
      padding: 0,
    },
  })
);

export default useStyles;
