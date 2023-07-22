import { nanoid } from "nanoid";
import { parseChapterInfo } from "./parseChapterInfo";
import QuoteCard from "../../../shared/quote-card/QuoteCard";

export const generateQuoteElements = (data) => {
  if (!data) {
    return null;
  }

  return data.quotes.map((quote, i) => {
    const chapterData = parseChapterInfo(quote);
    return (
      <QuoteCard
        book={quote.book}
        character={quote.character}
        quote={quote.text}
        chapterData={chapterData}
        showChapterInfo={true}
        parentComponent="search"
        key={nanoid()}
        id={i}
      />
    );
  });
};
