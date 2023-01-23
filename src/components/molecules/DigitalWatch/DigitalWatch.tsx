import cx from "classnames";
import { FlexBox } from "components";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { DigitalWatchProps } from "./types";
//Assets
import YellowExclamationImg from "assets/icons/yellow-exclamation.svg";
import FailedImg from "assets/icons/failed.svg";
const AlertBox: React.FC<DigitalWatchProps> = ({
  className,
  timeInMs,
  onTimeEnd,
}) => {
  let intervalRef: any = null;
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    timeCount: 0,
  });
  useEffect(() => {
    const nowTime = getMinSec(timeInMs);
    setTime({
      ...time,
      minutes: nowTime.min,
      seconds: nowTime.sec,
    });
    startTimer();
    return () => clearTimer();
  }, []);

  const startTimer = () => {
    const nowIntervalRef = setInterval(() => {
      setTime({
        ...time,
        timeCount: time.timeCount + 1000,
      });
      const timeDiff = timeInMs - time.timeCount;
      if (timeDiff < 0) {
        clearTimer();
        onTimeEnd?.();
        return;
      }
      const nowTime = getMinSec(timeDiff);
      setTime({
        ...time,
        minutes: nowTime.min,
        seconds: nowTime.sec,
      });
    }, 1000);

    intervalRef = nowIntervalRef;
  };

  const clearTimer = () => {
    clearInterval(intervalRef);
    intervalRef = null;
  };

  const getMinSec = (millSec: number) => {
    const minutes = Math.floor(millSec / 60000);
    const seconds = ((millSec % 60000) / 1000).toFixed(0);

    return {
      min: minutes,
      sec: Number(seconds),
    };
  };
  return (
    <span className={`digital-watch ${className}`}>
      {time.minutes < 10 ? "0" + time.minutes : time.minutes}{" "}
      <span className="font-light">MIN</span> :{" "}
      {time.seconds < 10 ? "0" + time.seconds : time.seconds}{" "}
      <span className="font-light">SEC</span>
    </span>
  );
};
export default AlertBox;
