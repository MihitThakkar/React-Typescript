import SmileyDisabledData from "assets/lottie/smiley-disabled.json";
import SmileyData from "assets/lottie/smiley.json";
import cx from "classnames";
import { Card, FlexBox } from "components";
import React, { useState } from "react";
//Libraries
import { Player, Controls } from "@lottiefiles/react-lottie-player";
// import Lottie from "react-lottie";
import "./styles.scss";
import { RatingProps } from "./types";
const SmileyOptions = {
  loop: false,
  autoplay: false,
  animationData: SmileyData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const SmileyDisabledOptions = {
  loop: false,
  autoplay: false,
  animationData: SmileyDisabledData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultRating = {
  1: true,
  2: true,
  3: true,
  4: true,
  5: true,
};

const Rating: React.FC<RatingProps> = ({ className, callback }) => {
  const [isStopped, setIsStopped] = useState(defaultRating);
  const changeRating = (data: any, rating: number) => {
    setIsStopped({ ...defaultRating });
    setTimeout(() => {
      setIsStopped({ ...data });
    }, 100);
    callback(rating);
  };
  return (
    <>
      <Card
        variant="white"
        className={cx(
          "rating animated fadeInRight delay-02s mr-t-20",
          className
        )}
      >
        <FlexBox alignCenter justifyBetween>
          <div className="w-100">
            <p className="fs-18 font-medium">Rate your experience with us!</p>
            <FlexBox className="mr-t-10 w-70">
              <div
                className="w-25 mr-r-10"
                onClick={() =>
                  changeRating(
                    {
                      1: false,
                      2: true,
                      3: true,
                      4: true,
                      5: true,
                    },
                    1
                  )
                }
              >
                <Player
                  autoplay={!isStopped["1"]}
                  loop={isStopped["1"]}
                  src={isStopped["1"] ? SmileyDisabledData : SmileyData}
                  style={{ height: "50px" }}
                />
              </div>
              <div
                className="w-25 mr-r-10"
                onClick={() =>
                  changeRating(
                    {
                      1: false,
                      2: false,
                      3: true,
                      4: true,
                      5: true,
                    },
                    2
                  )
                }
              >
                <Player
                  autoplay={!isStopped["2"]}
                  loop={isStopped["2"]}
                  src={isStopped["2"] ? SmileyDisabledData : SmileyData}
                  style={{ height: "50px" }}
                />
              </div>
              <div
                className="w-25 mr-r-10"
                onClick={() =>
                  changeRating(
                    {
                      1: false,
                      2: false,
                      3: false,
                      4: true,
                      5: true,
                    },
                    3
                  )
                }
              >
                <Player
                  autoplay={!isStopped["3"]}
                  loop={isStopped["3"]}
                  src={isStopped["3"] ? SmileyDisabledData : SmileyData}
                  style={{ height: "50px" }}
                />
              </div>
              <div
                className="w-25 mr-r-10"
                onClick={() =>
                  changeRating(
                    {
                      1: false,
                      2: false,
                      3: false,
                      4: false,
                      5: true,
                    },
                    4
                  )
                }
              >
                <Player
                  autoplay={!isStopped["4"]}
                  loop={isStopped["4"]}
                  src={isStopped["4"] ? SmileyDisabledData : SmileyData}
                  style={{ height: "50px" }}
                />
              </div>
              <div
                className="w-25 mr-r-10"
                onClick={() =>
                  changeRating(
                    {
                      1: false,
                      2: false,
                      3: false,
                      4: false,
                      5: false,
                    },
                    5
                  )
                }
              >
                <Player
                  autoplay={!isStopped["5"]}
                  loop={isStopped["5"]}
                  src={isStopped["5"] ? SmileyDisabledData : SmileyData}
                  style={{ height: "50px" }}
                />
              </div>
            </FlexBox>
          </div>
        </FlexBox>
      </Card>
    </>
  );
};
export default Rating;
