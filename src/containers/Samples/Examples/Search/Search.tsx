//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import { ActionBlock, Card, TitleBlock, Input, Search } from "components";
//Styles
import "./styles.scss";

const SearchExample = () => {
  //List
  const jsonList = [
    { title: "Lorem", date: "10 Dec' 21 | 05:01 pm" },
    { title: "Ipsum", date: "10 Dec' 21 | 05:01 pm" },
    { title: "Dummy", date: "10 Dec' 21 | 05:01 pm" },
    { title: "Never", date: "10 Dec' 21 | 05:01 pm" },
    { title: "Ever", date: "10 Dec' 21 | 05:01 pm" },
  ];
  const simpleList = ["Lorem", "Ipsum", "Dummy", "Never", "Ever"];

  //Constants
  const [simpleSearchedList, setSimpleSearchedList]: any[] = useState([]);
  const [complexSearchedList, setComplexSearchedList]: any[] = useState([]);

  return (
    <>
      <TitleBlock
        title="Simple Search"
        content={
          <>
            <Search
              placeholder="Search"
              list={simpleList}
              callback={setSimpleSearchedList}
            />
            <Card>
              {simpleSearchedList?.map((item: any, index: number) => {
                return (
                  <ActionBlock
                    key={index}
                    className={cx(
                      index === 0 && "pd-t-0",
                      simpleList.length - 1 !== index
                        ? "dashed-border-bottom"
                        : "no-border pd-b-0",
                      "no-shadow pd-h-0 br-0"
                    )}
                    onClick={() => {}}
                    title={item}
                  />
                );
              })}
            </Card>
          </>
        }
      />
      <TitleBlock
        title="Complex Search"
        className="mr-t-20"
        content={
          <>
            <Search
              placeholder="Search by title"
              list={jsonList}
              callback={setComplexSearchedList}
              searchKey={"title"}
            />
            <Card>
              {complexSearchedList?.map((item: any, index: number) => {
                return (
                  <ActionBlock
                    key={index}
                    className={cx(
                      index === 0 && "pd-t-0",
                      jsonList.length - 1 !== index
                        ? "dashed-border-bottom"
                        : "no-border pd-b-0",
                      "no-shadow pd-h-0 br-0"
                    )}
                    onClick={() => {}}
                    title={
                      <div>
                        <p className="font-medium">{item["title"]}</p>
                        <p className="clr-gray mr-t-2 fs-14">{item["date"]}</p>
                      </div>
                    }
                  />
                );
              })}
            </Card>
          </>
        }
      />
    </>
  );
};

export default SearchExample;
