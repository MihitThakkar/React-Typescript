import cx from "classnames";
import { FlexBox, Image } from "components";
import React from "react";
import "./styles.scss";
import { AlertBoxProps } from "./types";
//Assets
import YellowExclamationImg from "assets/icons/yellow-exclamation.svg";
import FailedImg from "assets/icons/failed.svg";
const AlertBox: React.FC<AlertBoxProps> = ({
  className,
  message,
  status = "FAILED",
  transparent,
}) => {
  return (
    <FlexBox
      className={cx(
        status === "FAILED" && "clr-red bg-red red-border",
        status === "SUCCESS" && "clr-theme bg-theme theme-border",
        status === "GREEN" && "clr-success bg-success success-border",
        transparent && "transparent-alert",
        "input--error up-to-down-scale fs-12 full-border animated fadeInDown pd-10 br-9 alert-box",
        className
      )}
      alignCenter
    >
      <Image
        src={status === "FAILED" ? FailedImg : YellowExclamationImg}
        className={cx("status-icon mr-r-10")}
      />
      <div className="font-medium">{message}</div>
    </FlexBox>
  );
};
export default AlertBox;
