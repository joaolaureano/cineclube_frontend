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
import { Container, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";

type Anchor = "right";

export default function TemporaryDrawer() {
  const classes = useStyles();
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
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton
        className={classes.icon2}
        onClick={toggleDrawer("right", false)}
      >
        <MoreVertIcon fontSize="large" />
      </IconButton>
      <List>
        <ListItem button key="Perfil" onClick={() => alert("Perfil")}>
          <ListItemText primary="Perfil" className={classes.text} />
          <ListItemIcon>
            <Container>
              <PermIdentityIcon className={classes.icon} />
            </Container>
          </ListItemIcon>
        </ListItem>
        <ListItem button key="Listas" onClick={() => alert("Listas")}>
          <ListItemText primary="Listas" className={classes.text} />
          <ListItemIcon>
            <Container>
              <ListIcon className={classes.icon} />
            </Container>
          </ListItemIcon>
        </ListItem>
        <ListItem button key="Conquistas" onClick={() => alert("Conquistas")}>
          <ListItemText primary="Conquistas" className={classes.text} />
          <ListItemIcon>
            <Container>
              <EmojiEventsIcon className={classes.icon} />
            </Container>
          </ListItemIcon>
        </ListItem>
        <ListItem
          button
          key="Configuração"
          onClick={() => alert("Configuração")}
        >
          <ListItemText primary="Configuração" className={classes.text} />
          <ListItemIcon>
            <Container>
              <SettingsIcon className={classes.icon} />
            </Container>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key="drawer">
        <IconButton color="default" onClick={toggleDrawer("right", true)}>
          <MoreVertIcon fontSize="large" />
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
