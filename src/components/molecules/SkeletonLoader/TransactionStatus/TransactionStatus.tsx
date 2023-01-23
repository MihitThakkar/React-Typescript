import cx from "classnames";
import { Card, FlexBox, SkeletonLoader, TitleBlock } from "components";
import React from "react";
import "./styles.scss";
import { TransactionStatusProps } from "./types";

const TransactionStatus: React.FC<TransactionStatusProps> = () => {
  return (
    <Card className="transaction-status-loader">
      <FlexBox
        flexColumn
        justifyCenter
        alignCenter
        className="text-center dashed-border-bottom pd-b-15 mr-b-15 pos-rel"
      >
        <SkeletonLoader
          height="100px"
          width="100px"
          className="br-100 status-icon"
        />
        <SkeletonLoader height="15px" width="200px" className="br-9 mr-t-10" />
        <SkeletonLoader height="15px" width="200px" className="br-9 mr-t-10" />
        <SkeletonLoader height="15px" width="200px" className="br-9 mr-t-10" />
        <FlexBox className="semi-circle left-rotate" justifyBetween alignCenter>
          <div></div>
          <div></div>
        </FlexBox>
      </FlexBox>
      <TitleBlock
        title="To"
        titleClass="fs-12 clr-gray font-light"
        className="dashed-border-bottom pd-b-15 mr-b-15"
        content={
          <FlexBox className="mr-t-5" justifyBetween alignCenter>
            <div>
              <SkeletonLoader height="15px" width="200px" className="br-9" />
              <SkeletonLoader
                height="15px"
                width="200px"
                className="br-9 mr-t-10"
              />
            </div>
            <SkeletonLoader height="50px" width="50px" className="br-100" />
          </FlexBox>
        }
      />
      <FlexBox className="dashed-border-bottom pd-b-15 mr-b-15" justifyBetween>
        <TitleBlock
          title="Date"
          titleClass="fs-12 clr-gray font-light"
          className="w-65"
          content={
            <SkeletonLoader height="10px" width="80px" className="br-9" />
          }
        />
        <TitleBlock
          title="Time"
          titleClass="fs-12 clr-gray font-light"
          className="w-30 text-right"
          content={
            <SkeletonLoader
              height="10px"
              width="80px"
              className="br-9 margin-right-auto"
            />
          }
        />
      </FlexBox>
      <TitleBlock
        title="From"
        titleClass="fs-12 clr-gray font-light"
        content={
          <FlexBox className="mr-t-5" justifyBetween alignCenter>
            <div>
              <SkeletonLoader height="15px" width="200px" className="br-9" />
              <SkeletonLoader
                height="15px"
                width="200px"
                className="br-9 mr-t-10"
              />
            </div>
            <SkeletonLoader height="50px" width="50px" className="br-100" />
          </FlexBox>
        }
      />
      <FlexBox className="semi-circle" justifyEvenly alignEnd>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </FlexBox>
    </Card>
  );
};
export default TransactionStatus;
