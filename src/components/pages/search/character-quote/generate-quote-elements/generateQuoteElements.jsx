import { nanoid } from "nanoid";
import CharacterQuote from "../CharacterQuote";

export const generateQuoteElements = (data) => {
  if (!data) {
    return null;
  }

  return data.quotes.map((quote, i) => (
    <CharacterQuote quoteData={quote} key={nanoid()} id={i} />
  ));
};
