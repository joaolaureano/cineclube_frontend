import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      width: 200,
    },
    paper: {
      height: 400,
      background: theme.palette.primary.main,
    },
    icon: {
      color: theme.palette.background.default,
    },
    icon2: {
      color: "default",
    },
    text: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
    },
  })
);

export default useStyles;
