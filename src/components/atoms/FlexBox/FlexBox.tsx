import React from "react";
import cx from "classnames";
import "./styles.scss";
import { FlexboxProps } from "./types";
const FlexBox: React.FC<FlexboxProps> = ({
  className,
  children,
  justifyCenter,
  justifyAround,
  justifyBetween,
  justifyEnd,
  justifyEvenly,
  alignEnd,
  alignCenter,
  alignTop,
  flexColumn,
  flexWrap,
  onClick,
  onScroll,
  flexBoxRef,
  onTouchMove,
  onTouchStart,
}) => {
  return (
    <div
      className={cx(
        "dsp-fl",
        justifyCenter && "justify-center",
        justifyAround && "justify-around",
        justifyBetween && "justify-between",
        justifyEvenly && "justify-evenly",
        justifyEnd && "justify-end",
        alignCenter && "align-center",
        alignTop && "align-top",
        alignEnd && "align-end",
        flexColumn && "flex-column",
        flexWrap && "flex-wrap",
        className
      )}
      onClick={onClick}
      onScroll={onScroll}
      ref={flexBoxRef}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  );
};
export default FlexBox;
