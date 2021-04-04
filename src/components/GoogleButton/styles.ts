import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      background: theme.palette.background.default,
      display: "flex",
      flexDirection: "column",
      width: "80%",
      "&:hover": {
        background: "rgba(0, 0, 0, 0.07)",
      },
    },
  })
);

export default useStyles;
