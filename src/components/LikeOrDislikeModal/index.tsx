import React from "react";
import { CustomModal } from "../CustomModal/";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { ThumbDown, ThumbUp } from "@material-ui/icons";

interface ModalProps {
  open: boolean;
  confirm: () => void;
  deny: () => void;
  onClose: () => void;
}

export const LikeOrDislikeModal: React.FC<ModalProps> = (props: ModalProps) => {
  const classes = useStyles();

  return (
    <CustomModal open={props.open} onClose={props.onClose}>
      <div className={classes.modalParent}>
        <Typography variant="h5" color="textPrimary">
          O que você achou do filme?
        </Typography>

        <div className={classes.buttons}>
          <IconButton onClick={props.confirm} aria-label="like" color="primary">
            <ThumbUp fontSize="large" className={classes.buttonIcon} />
          </IconButton>
          <IconButton onClick={props.deny} aria-label="dislike" color="primary">
            <ThumbDown
              fontSize="large"
              className={[classes.buttonIcon, classes.buttonMargin].join(" ")}
            />
          </IconButton>
        </div>
      </div>
    </CustomModal>
  );
};
