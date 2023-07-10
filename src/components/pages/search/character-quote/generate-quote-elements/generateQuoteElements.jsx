import { nanoid } from "nanoid";
import CharacterQuote from "../CharacterQuote";

export const generateQuoteElements = (quotesData) => {
  if (!quotesData) {
    return null;
  }

  return quotesData.quotes.map((quote, i) => (
    <CharacterQuote quoteData={quote} key={nanoid()} id={i} />
  ));
};
