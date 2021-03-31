import React from "react";
import { Button } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";

import useStyles from "./styles";

const GoogleButton = (): JSX.Element => {
  const styles = useStyles();
  return (
    <div>
      <Button
        startIcon={<FcGoogle size={30} />}
        variant="contained"
        color="secondary"
      >
        Entrar com Google
      </Button>
    </div>
  );
};

export default GoogleButton;
