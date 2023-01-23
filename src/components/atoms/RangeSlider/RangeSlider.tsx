import cx from "classnames";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { RangeSliderProps } from "./types";
const RangeSlider: React.FC<RangeSliderProps> = ({
  min = "0",
  max = "100",
  defaultValue = "0",
  onChange,
  className,
}) => {
  //Constants
  const [value, setValue] = useState("");

  //Use Effects
  useEffect(() => {
    onChange(value);
  }, [value]);

  useEffect(() => {
    defaultValue && setValue(defaultValue);
  }, [defaultValue]);
  return (
    <div className="range-slider pos-rel">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className={cx("range-slider-input w-100 br-60", className)}
        style={{
          background: `linear-gradient( to right, var(--theme) ${value}%, var(--gray) ${parseInt(
            value
          )}%)`,
        }}
        onInput={(event: any) => {
          const value = event.target.value;
          setValue(value);
        }}
      />
    </div>
  );
};
export default RangeSlider;
