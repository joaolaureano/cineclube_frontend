import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    icon: {
      color: theme.palette.text.primary,
    },
  })
);

export default useStyles;
