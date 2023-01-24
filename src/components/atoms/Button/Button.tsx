import React from "react";
// LIBRARIES
import cx from "classnames";
// STYLES
import "./styles.scss";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  text,
  variant,
  disabled,
  className,
  rounded,
  onClick,
  ...others
}) => (
  <button
    type="button"
    disabled={disabled}
    className={cx(
      className,
      "theme-btn clr-white clicking-animation br-9 clr-black bg-dark-theme font-extra-heavy pd-15",
      rounded && "rounded",
      variant && `variant-${variant}`
    )}
    {...others}
    onClick={() => {
      window.navigator.onLine && onClick && onClick();
    }}
  >
    <>{text}</>
  </button>
);

export default Button;
