import { generateRandomNumbers } from "./generateRandomNumbers";

export const getQuotes = (data, setQuotesData, quantity) => {
  const quotesArr = data.quotes;
  if (quantity !== 0 && quantity < quotesArr.length) {
    const indexArr = generateRandomNumbers(quotesArr, quantity);
    const modifiedQuotes = indexArr.map((index) => quotesArr[index]);
    setQuotesData({ ...data, quotes: modifiedQuotes });
  } else {
    setQuotesData(data);
  }
};
