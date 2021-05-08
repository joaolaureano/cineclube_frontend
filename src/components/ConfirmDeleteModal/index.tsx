import React from "react";
import { CustomModal } from "../CustomModal/";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

interface ModalProps {
  open: boolean;
  confirm: () => void;
  deny: () => void;
  onClose: () => void;
}

export const ConfirmDeleteModal: React.FC<ModalProps> = (props: ModalProps) => {
  const classes = useStyles();

  return (
    <CustomModal open={props.open} onClose={props.onClose}>
      <div className={classes.modalParent}>
        <Typography variant="h5" color="textPrimary">
          Você quer mesmo remover da lista ?
        </Typography>

        <div className={classes.buttons}>
          <IconButton onClick={props.confirm} aria-label="like" color="primary">
            <ThumbUp fontSize="large" className={classes.buttonIcon} />
          </IconButton>
          <IconButton onClick={props.deny} aria-label="dislike" color="primary">
            <ThumbDown fontSize="large" className={classes.buttonIcon} />
          </IconButton>
        </div>
      </div>
    </CustomModal>
  );
};
