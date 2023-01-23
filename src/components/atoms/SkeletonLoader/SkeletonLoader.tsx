import cx from "classnames";
import React from "react";
import "./styles.scss";
import { SkeletonLoaderProps } from "./types";

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  className,
  height = "100px",
  width = "100%",
  style,
}) => {
  return (
    <div
      className={cx("skeleton", className)}
      style={{ height, width, ...(style && { ...style }) }}
    />
  );
};
export default SkeletonLoader;
