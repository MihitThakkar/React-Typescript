import cx from "classnames";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { CircularProgressBarProps } from "./types";
const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  value,
  className,
  semiCircle = false,
  width = 200,
  text,
}) => {
  return !semiCircle ? (
    <div className={cx("circular-progress-bar", className)}>
      <svg viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="12"
          strokeLinecap="butt"
        />
        <circle
          className="percent"
          strokeDasharray="100"
          strokeDashoffset={100 - parseInt(value)}
          cx="-60"
          cy="60"
          r="54"
          fill="none"
          stroke="var(--theme)"
          strokeWidth="12"
          pathLength="100"
        />
      </svg>
    </div>
  ) : (
    <div className="semi-circular-progress-bar mr-b-20">
      <div
        className="barOverflow"
        style={{
          width,
          height: width / 2,
        }}
      >
        <div
          className="bar"
          style={{
            transform: "rotate(" + (45 + parseInt(value) * 1.8) + "deg)",
            width,
            height: width,
          }}
        ></div>
      </div>
      <div className="text">{text}</div>
    </div>
  );
};
export default CircularProgressBar;
