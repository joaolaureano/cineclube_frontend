import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "5rem", height: "5rem" },
};

export default useStyles;
