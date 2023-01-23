// LIBRARIES
import cx from "classnames";
import { FlexBox, Input } from "components";
import React, { useRef } from "react";
//COMPONENTS
// STYLES
import "./style.scss";
import { AlphaNumericInputProps } from "./types";
const AlphaNumericInput: React.FC<AlphaNumericInputProps> = ({
  className,
  inputRef,
  readOnly,
  showError,
  errorMsg,
  placeholder,
  hasLabel,
  value,
  onChange,
  maxLength,
  minLength,
  onEnter,
  others,
}) => {
  const alphaNumericInputRef: any = useRef(null);
  //Functions
  const inputChange = (event: any) => {
    let value = event.target.value;
    if (maxLength && value.length > maxLength)
      value = value.substring(0, maxLength);
    value = value.replace(/[^\w ]/gi, "");
    onChange(value);
  };
  return (
    <Input
      inputRef={inputRef || alphaNumericInputRef}
      type={"text"}
      value={value}
      onChange={inputChange}
      hasLabel={hasLabel}
      className={cx(className)}
      placeholder={placeholder}
      errorMsg={errorMsg}
      showError={showError}
      readOnly={readOnly}
      others={others}
      onEnter={onEnter}
    />
  );
};
export default AlphaNumericInput;
