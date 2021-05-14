import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    chip: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      width: "47%",
      opacity: "50%",
      padding: 0,
    },
  })
);

export default useStyles;
