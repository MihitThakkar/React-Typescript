import React from "react";
import cx from "classnames";
import "./styles.scss";
import { CardProps } from "./types";
const Card: React.FC<CardProps> = ({
  className,
  children,
  onClick,
  variant,
  noBorder,
  onScroll,
  cardRef,
}) => {
  return (
    <div
      className={cx(
        "card",
        className,
        noBorder && "no-border",
        variant && `variant-${variant}`
      )}
      onClick={onClick}
      onScroll={onScroll}
      ref={cardRef}
    >
      {children}
    </div>
  );
};
export default Card;
