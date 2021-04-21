import React from "react";
import { Avatar, AvatarTypeMap } from "@material-ui/core";

import netflix from "../../assets/images/platforms/Netflix.svg";
import amazon from "../../assets/images/platforms/Amazon.svg";
import { DefaultComponentProps } from "@material-ui/core/OverridableComponent";

interface PlatformIconProps extends DefaultComponentProps<AvatarTypeMap> {
  platform: string;
}

export const PlatformIcon: React.FC<PlatformIconProps> = (props) => {
  const getPlatform = (platform: string) => {
    switch (platform) {
      case "Netflix":
        return netflix;
      case "Amazon-Prime-Video":
        return amazon;
      default:
        return "not found";
    }
  };

  return (
    <Avatar
      className={props.className}
      alt={props.platform}
      variant="rounded"
      src={getPlatform(props.platform)}
    />
  );
};
