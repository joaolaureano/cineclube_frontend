import React from "react";
import { CustomModal } from "../CustomModal";
import useStyles from "./styles";
import { IconButton } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import Typography from "@material-ui/core/Typography";
import { CustomIcon } from "../CustomIcon";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export const TutorialModal: React.FC<ModalProps> = (props: ModalProps) => {
  const classes = useStyles();

  return (
    <CustomModal open={props.open} onClose={props.onClose}>
      <div className={classes.modalParent}>
        <div className={classes.content}>
          <Typography
            variant="h1"
            color="textPrimary"
            className={classes.title}
          >
            Veja abaixo como utilizar os botões da aplicação.
          </Typography>

          <div className={classes.tutorialButtons}>
            <div>
              <IconButton onClick={undefined} aria-label="undo" color="primary">
                <CustomIcon type="undo" />
              </IconButton>
              <p>Use este botão para VOLTAR um filme.</p>
            </div>
            <div>
              <IconButton onClick={undefined} aria-label="undo" color="primary">
                <CustomIcon type="wantToWatch" />
              </IconButton>
              <p>Use este botão para marcar um filme como QUERO ASSISTIR .</p>
            </div>
            <div>
              <IconButton onClick={undefined} aria-label="undo" color="primary">
                <CustomIcon type="dontWantToWatch" />
              </IconButton>
              <p>
                Use este botão para marcar um filme como NÃO QUERO ASSISTIR .
              </p>
            </div>
            <div>
              <IconButton
                onClick={undefined}
                aria-label="watched"
                color="primary"
              >
                <CustomIcon type="watched" />
              </IconButton>
              <p>Use este botão para marcar um filme como JÁ VI.</p>
            </div>
          </div>
        </div>

        <div className={classes.buttons}>
          <IconButton
            onClick={props.onClose}
            aria-label="cancel"
            color="primary"
          >
            Entendi
          </IconButton>
        </div>
      </div>
    </CustomModal>
  );
};
