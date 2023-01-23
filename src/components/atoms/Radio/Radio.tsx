import cx from "classnames";
import React from "react";
import "./styles.scss";
import { RadioProps } from "./types";
const Radio: React.FC<RadioProps> = ({
  label,
  isChecked,
  onChange,
  className,
}) => {
  return (
    <>
      <div
        className={cx(
          className,
          isChecked ? "clr-black" : "clr-disabled",
          "md-radio clicking-animation"
        )}
        onClick={() => onChange(!isChecked)}
      >
        <input
          type="radio"
          checked={isChecked}
          onChange={() => onChange(!isChecked)}
        />
        <label className="fs-16 font-medium">
          <span>{label}</span>
        </label>
      </div>
    </>
  );
};
export default Radio;
