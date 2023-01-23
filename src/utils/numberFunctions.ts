export const numberFunctions = {
  /**
   * use this method to display any and all amount-values
   * @param  {[number, string]} amount [200000]
   * @return {[string]}                [2,00,000]
   */
  currencyFormat: (
    amount: any,
    floatValue?: boolean,
    showZeroDecimal?: boolean
  ) => {
    let formatted = "";
    amount = floatValue ? parseFloat(amount) : Math.floor(amount);
    formatted = amount
      ?.toFixed(2)
      .toString()
      ?.replace(/(\d)(?=(\d{2})+\d\.)/g, "$1,");
    const firstSplit = formatted.split(".");
    if (
      (firstSplit.length > 0 && parseInt(firstSplit[1]) > 0) ||
      showZeroDecimal
    ) {
      return formatted;
    }
    return formatted.split(".")[0];
  },
  compactNumber: (value: any) => {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(("" + value).length / 3);
    let shortValue: any = parseFloat(
      (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(
        2
      )
    );
    if (shortValue % 1 != 0) {
      shortValue = shortValue.toFixed(2);
    }
    return shortValue + suffixes[suffixNum];
  },
  randomNumber: (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  getRawAmount: (amount: string, type?: string): any => {
    const replace = amount.replaceAll(",", "");
    const returnValue = type === "string" ? replace : parseFloat(replace);
    return returnValue;
  },
};
