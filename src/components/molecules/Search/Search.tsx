//React
import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
//Components
import {
  ActionBlock,
  Card,
  TitleBlock,
  Input,
  AlphaNumericInput,
} from "components";
//Styles
import "./styles.scss";
import { SearchProps } from "./types";
import classNames from "classnames";
import { stringsSimilar } from "utils";
//Assets
import SearchIcon from "assets/icons/search.svg";
import { AlphaInput, NumberInput } from "../Input";

const Search: React.FC<SearchProps> = ({
  placeholder = "Search",
  searchKey,
  secondarySearchKey,
  list,
  callback,
  getSearchValue,
  className,
  maxLength = 30,
  defaultValue,
  type,
  others,
}) => {
  //Constants
  const inputRef = useRef(null);
  const [itemType, setItemType] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    callback([...list]);
  }, []);

  useEffect(() => {
    if (typeof defaultValue === "string") {
      setSearchValue(defaultValue);
      inputChange(defaultValue);
    }
  }, [defaultValue]);

  const stringMatchWithStart = (mainString: string, stringToCheck: string) => {
    return mainString
      ?.toString()
      .toLowerCase()
      .startsWith(stringToCheck.toLowerCase());
  };

  const stringMatchThatIncludes = (
    mainString: string,
    stringToCheck: string
  ) => {
    return mainString
      ?.toString()
      .toLowerCase()
      .includes(stringToCheck.toLowerCase());
  };

  //Functions
  const inputChange = (value: string) => {
    value = value.replace(/[^\w ]/gi, "");
    let finalArray: any = [];
    const stringMatchWithStartList: any = [];
    const stringMatchThatIncludesList: any = [];
    const editDistanceList: any = [];
    setSearchValue(value);
    list?.map((item) => {
      let stringMatchWithStartValueExist = false;
      let stringMatchThatIncludesValueExist = false;
      let editDistanceValueExist = false;
      if (searchKey) {
        //stringMatchWithStart
        stringMatchWithStartValueExist = stringMatchWithStart(
          item[searchKey],
          value
        );
        if (!stringMatchWithStartValueExist && secondarySearchKey) {
          stringMatchWithStartValueExist = stringMatchWithStart(
            item[secondarySearchKey],
            value
          );
        }
        stringMatchWithStartValueExist && stringMatchWithStartList.push(item);
        //stringMatchThatIncludes
        stringMatchThatIncludesValueExist = stringMatchThatIncludes(
          item[searchKey],
          value
        );
        if (!stringMatchThatIncludesValueExist && secondarySearchKey) {
          stringMatchThatIncludesValueExist = stringMatchThatIncludes(
            item[secondarySearchKey],
            value
          );
        }
        stringMatchThatIncludesValueExist &&
          stringMatchThatIncludesList.push(item);
        // //editDistance
        // if (searchKey in item) {
        //   let searchKeySplit = item[searchKey].split(" ");
        //   editDistanceValueExist =
        //     stringsSimilar(searchKeySplit[0], value) ||
        //     stringsSimilar(searchKeySplit[searchKeySplit.length - 1], value);
        //   editDistanceValueExist && editDistanceList.push(item);
        // }
      } else {
        stringMatchThatIncludesValueExist = stringMatchThatIncludes(
          item,
          value
        );
        stringMatchThatIncludesValueExist &&
          stringMatchThatIncludesList.push(item);
      }
    });
    finalArray = [
      ...stringMatchWithStartList,
      ...stringMatchThatIncludesList,
      ...editDistanceList,
    ];
    const jsonObject = finalArray.map(JSON.stringify);

    const uniqueSet = new Set(jsonObject);
    const uniqueArray = Array.from(uniqueSet).map((item: any) =>
      JSON.parse(item)
    );
    callback(uniqueArray);
    getSearchValue?.(value);
  };

  return (
    <div className="search-input">
      {type === "number" ? (
        <NumberInput
          inputRef={inputRef}
          value={searchValue}
          placeholder={placeholder}
          onChange={inputChange}
          className={cx(className, "mr-b-10 fs-16")}
          maxLength={maxLength}
          others={others}
        />
      ) : type === "text" ? (
        <AlphaInput
          inputRef={inputRef}
          value={searchValue}
          placeholder={placeholder}
          onChange={inputChange}
          className={cx(className, "mr-b-10 fs-16")}
          maxLength={maxLength}
          others={others}
        />
      ) : (
        <AlphaNumericInput
          inputRef={inputRef}
          value={searchValue}
          placeholder={placeholder}
          onChange={inputChange}
          className={cx(className, "mr-b-10 fs-16")}
          maxLength={maxLength}
          others={others}
        />
      )}
      <img src={SearchIcon} />
    </div>
  );
};

export default Search;
