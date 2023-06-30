export const getRandom = (quantity, data) => {
  if (quantity !== 0 && quantity < data.quote.length) {
    const quotesArr = [];
    for (let i = 0; i <= quantity; i++) {
      const x = Math.floor(Math.random() * quotesData.quotes.length);
      quotesArr.push(quotesData.quotes[x]);
    }
    return quotesArr;
  } else {
    return data;
  }
};
