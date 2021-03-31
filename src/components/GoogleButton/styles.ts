import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    "&:hover": {
      backgroundColor: "green",
    },
  },
});

export default useStyles;
