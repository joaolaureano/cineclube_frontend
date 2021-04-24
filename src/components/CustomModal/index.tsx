import React, { Component, ReactElement } from "react";
import Modal from "@material-ui/core/Modal";
import useStyles from "./styles";

interface ModalProps {
  children: ReactElement<
    any,
    | string
    | ((props: any) => ReactElement<any, any> | null)
    | (new (props: any) => Component<any, any, any>)
  >;
  open: boolean;
}

export const CustomModal: React.FC<ModalProps> = (props: ModalProps) => {
  const classes = useStyles();

  return (
    <div className={classes.modalParent}>
      <Modal open={props.open} className={classes.modal} disableBackdropClick>
        <div className={classes.modalBorder}>{props.children}</div>
      </Modal>
    </div>
  );
};
