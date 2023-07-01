import { nanoid } from "nanoid";
import CharacterQuote from "./character-quote/CharacterQuote";

export const generateQuoteElements = (quotesData) => {
  if (!quotesData) {
    return null;
  }

  return quotesData.quotes.map((quote) => (
    <CharacterQuote quoteData={quote} key={nanoid()} />
  ));
};
