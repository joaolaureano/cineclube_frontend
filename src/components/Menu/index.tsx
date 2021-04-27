import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ListIcon from "@material-ui/icons/List";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router-dom";
import { Container, IconButton, Typography } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
type Anchor = "right";

export default function TemporaryDrawer() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    right: false,
  });

  //todo:ADICIONAR O ICONE COM OUTRA COR PARA DISTINGUIR

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.menuContainer}
    >
      <IconButton
        className={[classes.icon2, classes.iconButtonMenu].join(" ")}
        onClick={toggleDrawer("right", false)}
      >
        <MoreVertIcon fontSize="large" className={classes.iconMenuImg} />
      </IconButton>
      <List className={classes.test}>
        <ListItem
          className={classes.textIcon}
          button
          key="Perfil"
          onClick={() => alert("Perfil")}
        >
          <ListItemText
            primary={<Typography className={classes.text}>Perfil</Typography>}
          />
          <ListItemIcon>
            <Container className={classes.borderIcon}>
              <PermIdentityIcon className={classes.icon} />
            </Container>
          </ListItemIcon>
        </ListItem>
        <ListItem
          className={classes.textIcon}
          button
          key="Listas"
          onClick={() => history.push("/user/movies")}
        >
          <ListItemText
            primary={<Typography className={classes.text}>Listas</Typography>}
          />
          <ListItemIcon>
            <Container className={classes.borderIcon}>
              <ListIcon className={classes.icon} />
            </Container>
          </ListItemIcon>
        </ListItem>
        <ListItem
          className={classes.textIcon}
          button
          key="Conquistas"
          onClick={() => alert("Conquistas")}
        >
          <ListItemText
            primary={
              <Typography className={classes.text}>Conquistas</Typography>
            }
          />
          <ListItemIcon>
            <Container className={classes.borderIcon}>
              <EmojiEventsIcon className={classes.icon} />
            </Container>
          </ListItemIcon>
        </ListItem>
        <ListItem
          className={classes.textIcon}
          button
          key="Configuração"
          onClick={() => alert("Configuração")}
        >
          <ListItemText
            primary={
              <Typography className={classes.text}>Configuração</Typography>
            }
          />
          <ListItemIcon className={classes.icon}>
            <Container className={classes.borderIcon}>
              <SettingsIcon />
            </Container>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="drawer">
        <IconButton
          className={classes.icon2}
          onClick={toggleDrawer("right", true)}
        >
          <MoreVertIcon fontSize="large" className={classes.iconImg} />
        </IconButton>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          classes={{
            paper: classes.paper,
          }}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
