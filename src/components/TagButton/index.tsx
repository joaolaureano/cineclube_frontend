import { AvatarTypeMap, Button, Chip } from "@material-ui/core";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";
import React from "react";
import styles from "./styles";

interface TagButtonProps extends DefaultComponentProps<AvatarTypeMap> {
  title: string;
}

export const TagButton: React.FC<TagButtonProps> = (props) => {
  const classes = styles();
  const { title } = props;

  return (
    <Chip
      variant="outlined"
      size="medium"
      color="primary"
      className={classes.chip}
      label={title}
    />
  );
};
