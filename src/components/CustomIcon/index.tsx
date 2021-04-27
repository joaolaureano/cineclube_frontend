import React from "react";

import watched from "../../assets/images/icons/actions-watched.svg";
import wantToWatch from "../../assets/images/icons/actions-want-to-watch.svg";
import dontWantToWatch from "../../assets/images/icons/actions-dont-want-to-watch.svg";
import undo from "../../assets/images/icons/actions-undo.svg";

interface CustomIconProps {
  type: "watched" | "wantToWatch" | "dontWantToWatch" | "undo";
  className?: string;
}

const getIcon = (type: string) => {
  switch (type) {
    case "watched":
      return watched;
    case "wantToWatch":
      return wantToWatch;
    case "dontWantToWatch":
      return dontWantToWatch;
    case "undo":
      return undo;
  }
};

export const CustomIcon: React.FC<CustomIconProps> = ({ type, className }) => {
  return (
    <img
      width={50}
      src={getIcon(type)}
      alt={`${type}-button`}
      className={className}
    />
  );
};
