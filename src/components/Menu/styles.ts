import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      margin: 0,
      padding: 0,
      height: 280,
      width: 170,
      maxWidth: "900px",
      maxHeight: "900px",
      overflow: "hidden",
      background: theme.palette.primary.main,
    },
    icon: {
      color: theme.palette.primary.main,
    },
    icon2: {
      width: 170,
      justifyContent: "flex-end",
    },
    text: {
      textAlign: "right",
      color: theme.palette.text.primary,
      fontWeightBold: 600,
    },
    borderIcon: {
      padding: 0,
      justifyContent: "center",
      alignItems: "center",
      width: 25,
      height: 35,
      display: "flex",
      background: theme.palette.background.default,
      borderRadius: "15px 15px 15px 15px",
    },
    textIcon: {
      width: 170,
      paddingLeft: 0,
      paddingRight: 0,
    },
    test: {},
  })
);

export default useStyles;
