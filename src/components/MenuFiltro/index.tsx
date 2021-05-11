import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { CustomIcon } from "../CustomIcon";
type Anchor = "right";

export default function MenuFiltro() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleIcon = (anchor: Anchor, open: boolean) => (
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

  return (
    <div>
      <React.Fragment>
        <span
          onClick={() => {
            console.log("Icon clicked");
          }}
        >
          <CustomIcon type="menuFilters" className={classes.icon} />
        </span>
      </React.Fragment>
    </div>
  );
}
