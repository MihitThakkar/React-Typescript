import FailedImg from "assets/icons/failed.svg";
import PendingImg from "assets/icons/pending.svg";
import CheckMarkImg from "assets/icons/green-success.svg";
import cx from "classnames";
import React from "react";
import "./styles.scss";
import { StatusMarkProps } from "./types";
import { Image } from "components";

const StatusMark: React.FC<StatusMarkProps> = ({
  status = "SUCCESS",
  className,
}) => {
  const IMAGE_PATH: any = {
    PENDING: PendingImg,
    FAILED: FailedImg,
    SUCCESS: CheckMarkImg,
  };

  return (
    <Image
      className={cx(className, "check-mark-img")}
      src={IMAGE_PATH[status]}
    />
  );
};
export default StatusMark;
