import React from "react";
import { Button } from "@material-ui/core";
import { FcGoogle } from "react-icons/fc";

import useStyles from "./styles";

export interface ButtonProps {
  onClick: any;
  children: React.ReactNode;
}

export const GoogleButton: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props: ButtonProps): JSX.Element => {
  const styles = useStyles();
  return (
    <Button
      className={styles.button}
      startIcon={<FcGoogle size={30} />}
      variant="contained"
      color="secondary"
      size="large"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
