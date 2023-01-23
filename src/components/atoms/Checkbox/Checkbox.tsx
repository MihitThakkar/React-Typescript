import BlueSuccess from "assets/icons/blue-success.svg";
import DisabledSuccess from "assets/icons/disabled-success.svg";
import cx from "classnames";
import { FlexBox } from "components";
import React from "react";
import "./styles.scss";
import { CheckboxProps } from "./types";
const Checkbox: React.FC<CheckboxProps> = ({
  className,
  label,
  checked,
  labelClass,
  disabled,
  onChange,
}) => {
  return (
    <FlexBox alignCenter className={cx("checkbox pd-l-5 w-100", className)}>
      <div
        className="checkbox-img full-border blue-border mr-r-10 br-100"
        onClick={() => {
          onChange(!checked);
        }}
      >
        {checked && (
          <img
            alt="img"
            loading="lazy"
            src={disabled ? DisabledSuccess : BlueSuccess}
            className={cx("animated zoomIn w-100 h-100 dsp-b")}
          />
        )}
      </div>
      <p className={cx("text w-90", labelClass)}>{label}</p>
    </FlexBox>
  );
};
export default Checkbox;
