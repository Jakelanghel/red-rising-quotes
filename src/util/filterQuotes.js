import { generateRandomNumbers } from "../util/generateRandomNumbers";

export const filterQuotes = (arr, length) => {
  // filter out quotes that are to long
  const quotesArr = arr.filter((quote) => quote.text.length < 250);
  // get random indexes and use them to select random quotes
  const indexArr = generateRandomNumbers(quotesArr, length);
  return indexArr.map((index) => quotesArr[index]);
};
