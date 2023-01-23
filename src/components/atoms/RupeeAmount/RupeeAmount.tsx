import cx from "classnames";
// LIBRARIES
import React, { useEffect, useState } from "react";
import { numberFunctions } from "utils";
// STYLES
import "./styles.scss";
import { RupeeAmountProps } from "./types";

const RupeeAmount: React.FC<RupeeAmountProps> = ({
  amount,
  amountClass = "",
  iconClass,
  className,
  onClick,
  floatValue,
  hideRupeeIcon = false,
  showZeroDecimal = false,
}) => {
  const [finalIconClass, setFinalIconClass] = useState("");
  useEffect(() => {
    if (iconClass) {
      setFinalIconClass(iconClass);
    } else {
      setFinalIconClass(`fs-${parseInt(amountClass?.split("-")[1]) - 4}`);
    }
  }, [iconClass, amountClass]);
  return (
    <div onClick={onClick} className={cx("rupee-container dsp-inb", className)}>
      {!hideRupeeIcon && (
        <span className={cx("rupee-icon", amountClass)}>₹</span>
      )}
      <span className={cx("rupee-currency", amountClass)}>
        {numberFunctions.currencyFormat(
          amount || 0,
          true,
          showZeroDecimal
        )}
      </span>
    </div>
  );
};

export default RupeeAmount;
