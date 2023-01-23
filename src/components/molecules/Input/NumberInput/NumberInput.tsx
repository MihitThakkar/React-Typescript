// LIBRARIES
import cx from "classnames";
import { FlexBox, Input } from "components";
import React, { useRef } from "react";
//COMPONENTS
// STYLES
import "./style.scss";
import { NumberInputProps } from "./types";
const NumberInput: React.FC<NumberInputProps> = ({
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
  onEnter,
  minLength,
  hasPasswordInput,
  others,
}) => {
  const numberInputRef: any = useRef(null);
  //Functions
  const inputChange = (event: any) => {
    let value = event.target.value;
    if (maxLength && value.length > maxLength)
      value = value.substring(0, maxLength);
    value = value.replace(/[^\d]/gi, "");
    onChange(value);
  };
  return (
    <Input
      inputRef={inputRef ?? numberInputRef}
      type={hasPasswordInput ? "password" : "tel"}
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
export default NumberInput;
