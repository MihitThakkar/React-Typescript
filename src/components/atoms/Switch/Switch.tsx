import cx from "classnames";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { SwitchProps } from "./types";
const Switch: React.FC<SwitchProps> = ({
  className,
  switchCallback,
  activeSwitch,
}) => {
  return (
    <div
      className={cx(
        "switch pos-rel",
        className,
        activeSwitch ? "bg-dark-theme" : "bg-platinum"
      )}
      onClick={() => {
        switchCallback(!activeSwitch);
      }}
    >
      <div
        className={cx(activeSwitch ? "active" : "not-active", "bg-white")}
      ></div>
    </div>
  );
};
export default Switch;
