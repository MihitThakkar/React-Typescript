import React from "react";
// LIBRARIES
import cx from "classnames";
// STYLES
import "./styles.scss";
import { ImageProps } from "./types";
import { IMAGE_ALTERNATIVE_TEXT } from "../../../constants";

const Image: React.FC<ImageProps> = ({
  alt,
  className,
  src,
  others,
  onClick,
}) => {
  const defaultAlt = IMAGE_ALTERNATIVE_TEXT[Math.floor(Math.random() * 5)];
  return (
    <img
      src={src}
      className={className}
      alt={alt ?? defaultAlt}
      {...others}
      loading="lazy"
      onClick={onClick}
    />
  );
};

export default Image;
