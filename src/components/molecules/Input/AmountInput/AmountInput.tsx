// LIBRARIES
import cx from "classnames";
import { FlexBox, Input } from "components";
import React, { useRef } from "react";
import { numberFunctions } from "utils";
//COMPONENTS
// STYLES
import "./style.scss";
import { AmountInputProps } from "./types";
const AmountInput: React.FC<AmountInputProps> = ({
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
  const amountInputRef: any = useRef(null);
  //Functions
  const inputChange = (event: any) => {
    let value = event.target.value;
    let hasDot = false;
    value = numberFunctions.getRawAmount(value, "string");
    if (maxLength && value.length > maxLength)
      value = value.substring(0, maxLength);
    if (value.includes(".")) {
      let splitByDot = value.split(".");
      if (splitByDot.length > 2) {
        value = value.substring(0, value.length - 1);
      }
    }
    let split = value.split(".");
    hasDot = split.length > 1;
    // value = new Intl.NumberFormat("en-IN", {
    //   style: "currency",
    //   currency: "INR",
    //   minimumFractionDigits: 0,
    //   maximumFractionDigits: 20,
    // }).format(numberFunctions.getRawAmount(value, "number"));
    // value = value.slice(1);
    value =
      numberFunctions.getRawAmount(value.split(".")[0]) > 0
        ? numberFunctions.getRawAmount(value) % 1
          ? Number(value.charAt(value.length - 1)) > 0
            ? value
            : value.substring(0, value.length - 1)
          : hasDot
          ? `${value.split(".")[0]}.`
          : value.split(".")[0]
        : "";
    value =
      value.split(".")[1]?.length > 2
        ? value.substring(0, value.length - 1)
        : value;
    onChange(value);
  };
  return (
    <Input
      inputRef={inputRef ?? amountInputRef}
      type={"decimal"}
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
export default AmountInput;
