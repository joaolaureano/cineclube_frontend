import { AvatarTypeMap, Button, Chip } from "@material-ui/core";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";
import React from "react";
import styles from "./styles";

interface TagButtonProps extends DefaultComponentProps<AvatarTypeMap> {
  title: string;
  selected: boolean;
}

export const TagButton: React.FC<TagButtonProps> = (props) => {
  const classes = styles();
  const { title, onClick, selected } = props;

  return (
    <Chip
      variant={selected ? "outlined" : "default"}
      size="medium"
      color="primary"
      label={title}
      onClick={onClick}
    />
  );
};
