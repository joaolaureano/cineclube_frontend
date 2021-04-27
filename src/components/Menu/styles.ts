import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      margin: 0,
      padding: 0,
      height: 300,
      width: 170,
      maxWidth: "900px",
      maxHeight: "900px",
      overflow: "hidden",
      borderRadius: "0 0 0 2rem",
      background: `linear-gradient(45deg, rgba(206,124,44,1) 0%, rgba(247, 155, 51, 1) 50%, rgba(206,124,44,1) 100%)`,
    },
    menuContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },

    icon: {
      color: theme.palette.primary.main,
    },
    icon2: {
      justifyContent: "flex-end",
      padding: 0,
    },
    iconButtonMenu: {
      padding: "0.5rem",
    },
    iconImg: {
      fontSize: "3rem",
      marginRight: "-1rem",
    },
    iconMenuImg: {
      fontSize: "3rem",
    },
    text: {
      textAlign: "right",
      color: theme.palette.text.primary,
      fontWeight: "bold",
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
