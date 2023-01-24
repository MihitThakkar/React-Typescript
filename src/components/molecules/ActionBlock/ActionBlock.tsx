import cx from "classnames";
import { Card, FlexBox, Image } from "components";
import React from "react";
import "./styles.scss";
import { ActionBlockProps } from "./types";
import InfoImg from "assets/icons/info.svg";
const ActionBlock: React.FC<ActionBlockProps> = ({
  className,
  onClick,
  icon,
  leftContent,
  title,
  rightContent,
  noClickable,
}) => {
  return (
    <Card
      noBorder
      variant="white"
      className={cx(
        className,
        "action-block-card br-9",
        !noClickable && "clicking-animation"
      )}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <FlexBox className="action-block-content" justifyBetween alignCenter>
        <FlexBox alignCenter>
          {leftContent ||
            (icon ? <Image src={icon || InfoImg} className="icon" /> : null)}
          <p className={cx((icon || leftContent) && "mr-l-20")}>{title}</p>
        </FlexBox>
        {rightContent}
      </FlexBox>
    </Card>
  );
};
export default ActionBlock;
