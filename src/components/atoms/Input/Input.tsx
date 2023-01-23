// LIBRARIES
import cx from "classnames";
import { FlexBox } from "components";
import React, { useRef } from "react";
//COMPONENTS
// STYLES
import "./style.scss";
import { InputProps } from "./types";
//ASSETS
import FailedImg from "assets/icons/failed.svg";
const Input: React.FC<InputProps> = ({
  className,
  type,
  inputRef,
  readOnly,
  isValid,
  placeholder,
  showError,
  errorMsg,
  hasLabel,
  value,
  onChange,
  onEnter,
  others,
}) => {
  const defaultRef: any = useRef(null);
  return (
    <div className={cx("input-container w-100", className)}>
      <input
        {...others}
        ref={inputRef || defaultRef}
        style={readOnly ? { pointerEvents: "none" } : {}}
        type={type}
        value={value}
        readOnly={readOnly}
        inputMode={type}
        className={cx(
          "input__element font-medium border-bottom pd-v-10 w-100",
          {
            "input__element--valid": isValid && isValid !== null,
            "input__element--invalid": isValid === false || showError === true,
          },
          value && (showError ? "red-border" : "theme-border")
        )}
        onChange={onChange}
        placeholder={!hasLabel ? placeholder : ""}
        onKeyDown={(e: any) => {
          if (e.key === "Enter" || e.code === "Enter") {
            onEnter?.();
          } else if (others?.onKeyDown) {
            others?.onKeyDown(e);
          }
        }}
      />
      {hasLabel && placeholder && (
        <p
          className={cx(
            value && (showError ? "clr-red" : "clr-theme"),
            "clr-disabled font-medium input-label"
          )}
          onClick={() => {
            if (inputRef) inputRef.current.focus();
            else defaultRef.current.focus();
          }}
        >
          {placeholder}
        </p>
      )}
      {showError && (
        <FlexBox
          alignCenter
          className="input--error up-to-down-scale clr-red fs-14 animated fadeInDown mr-t-10 br-9"
        >
          <img src={FailedImg} className="w-5 mr-r-10" />
          <p>{errorMsg}</p>
        </FlexBox>
      )}
    </div>
  );
};
export default Input;
