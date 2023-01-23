const editDistance = (masterString: string, stringToBeChecked: string) => {
  masterString = masterString.toLowerCase();
  stringToBeChecked = stringToBeChecked.toLowerCase();

  let differences = [];
  for (let i = 0; i <= masterString.length; i++) {
    let endingValue = i;
    for (let j = 0; j <= stringToBeChecked.length; j++) {
      if (i == 0) differences[j] = j;
      else {
        if (j > 0) {
          let midTermValue = differences[j - 1];
          if (masterString.charAt(i - 1) != stringToBeChecked.charAt(j - 1))
            midTermValue =
              Math.min(Math.min(midTermValue, endingValue), differences[j]) + 1;
          differences[j - 1] = endingValue;
          endingValue = midTermValue;
        }
      }
    }
    if (i > 0) differences[stringToBeChecked.length] = endingValue;
  }
  return differences[stringToBeChecked.length];
};

const similarity = (masterString: string, stringToBeChecked: string) => {
  let masterStringLength: any = masterString.length;
  const similarityIndex =
    (masterStringLength - editDistance(masterString, stringToBeChecked)) /
    parseFloat(masterStringLength);
  const isSimilar = similarityIndex > 0.5;
  return isSimilar;
};

export default similarity;
