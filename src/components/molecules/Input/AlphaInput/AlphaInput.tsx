// LIBRARIES
import cx from "classnames";
import { FlexBox, Input } from "components";
import React, { useRef, useState } from "react";
//COMPONENTS
// STYLES
import "./style.scss";
import { AlphaInputProps } from "./types";
const AlphaInput: React.FC<AlphaInputProps> = ({
  className,
  inputRef,
  readOnly,
  showError,
  errorMsg,
  placeholder,
  hasLabel,
  value,
  onChange,
  onEnter,
  maxLength,
  minLength,
  others,
}) => {
  const alphaInputRef: any = useRef(null);
  const [isBackspaceTapped, setIsBackspaceTapped] = useState(true)
  const [inputValueLength, setInputValueLength] = useState(0)

  //Functions
  const removeEmojis = (string: string) => {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;

    return string.replace(regex, "");
  };

  const inputChange = (event: any) => {
    let value = event?.target?.value;
    if (maxLength && value.length > maxLength)
      value = value.substring(0, maxLength);
    value = value.replace(/[^A-Za-z ]/, "");
    value = removeEmojis(value);
    if(isBackspaceTapped) {
      onChange(value)  
    } else {
      if(inputValueLength + 1 === value.length) {
        onChange(value)
      } else {
        value = value.substring(0, inputValueLength);
        onChange(value)
      }
    }
    setInputValueLength(value.length)
  };

  return (
    <Input
      inputRef={inputRef || alphaInputRef}
      type={"text"}
      value={value}
      onChange={inputChange}
      hasLabel={hasLabel}
      className={cx(className)}
      placeholder={placeholder}
      errorMsg={errorMsg}
      showError={showError}
      readOnly={readOnly}
      others={{
        onKeyDown: (e: any) => {
          setIsBackspaceTapped(e.key === "Backspace")
          others?.onKeyDown?.(e)
        }, 
        ...others
      }}
      onEnter={onEnter}
    />
  );
};
export default AlphaInput;
