import cx from "classnames";
import React from "react";
import "./styles.scss";
import { TitleBlockProps } from "./types";

const TitleBlock: React.FC<TitleBlockProps> = ({
  className,
  title,
  content,
  titleClass,
}) => {
  return (
    <div className={cx("title-block", className)}>
      <p className={cx("fs-14 mr-b-10 title", titleClass)}>{title}</p>
      {content && content}
    </div>
  );
};
export default TitleBlock;
