import React from "react";
import cx from "classnames";
import "./styles.scss";
import { Button } from "components";
import { FooterProps } from "./types";
const Footer: React.FC<FooterProps> = ({
  className,
  buttonText,
  buttonAction,
  buttonDisable,
  buttonVariant,
  firstButtonText,
  firstButtonAction,
  secondButtonText,
  secondButtonAction,
  text,
}) => {
  return (
    <div
      className={cx(
        "footer animated fadeInUp delay-03s bg-white pd-20",
        secondButtonText && "double-button dsp-fl align-center justify-between",
        className
      )}
    >
      {buttonText ? (
        <Button
          text={buttonText}
          onClick={buttonAction}
          disabled={buttonDisable}
          variant={buttonVariant || ""}
          className="w-100"
        />
      ) : secondButtonText ? (
        <>
          <Button
            text={firstButtonText}
            onClick={firstButtonAction}
            variant="outline"
          />
          <Button text={secondButtonText} onClick={secondButtonAction} />
        </>
      ) : text ? (
        text
      ) : null}
    </div>
  );
};
export default Footer;
