import React from "react";
import CharacterQuote from "./character-quote/CharacterQuote";
import { nanoid } from "nanoid";

const QuoteElements = (props) => {
  return props.quotesData
    ? props.quotesData.quotes.map((quote) => (
        <CharacterQuote quoteData={quote} key={nanoid()} />
      ))
    : null;
};

export default QuoteElements;
