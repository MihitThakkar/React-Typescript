import RightArrowImg from "assets/icons/down-arrow.png";
import cx from "classnames";
import { Card, FlexBox, Image } from "components";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { AccordionProps } from "./types";
const Accordion: React.FC<AccordionProps> = ({
  className,
  title,
  content,
  defaultActive,
}) => {
  const [accordionActive, setAccordionActive] = useState(false);

  useEffect(() => {
    if (defaultActive) {
      setAccordionActive(true);
    }
  }, []);
  return (
    <div
      className={cx(
        className,
        "accordion br-7 overflow-hdn full-border",
        accordionActive && "accordion-active"
      )}
    >
      <FlexBox
        justifyBetween
        alignCenter
        onClick={() => {
          setAccordionActive(!accordionActive);
        }}
        className="clicking-animation pd-20"
      >
        <p className="font-regular accordion-title">{title}</p>
        <Image
          alt="img"
          src={RightArrowImg}
          className={cx(
            accordionActive && "rotate180",
            "transition right-arrow"
          )}
        />
      </FlexBox>
      <div className={cx("accordion-content font-light pd-20 pd-t-0")}>
        {content}
      </div>
    </div>
  );
};
export default Accordion;
