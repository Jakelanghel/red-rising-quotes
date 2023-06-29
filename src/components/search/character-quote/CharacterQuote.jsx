import React from "react";

const CharacterQuote = (props) => {
  const { quoteData } = props;
  return (
    <div className="text-white text-center fs-4 mt-4">
      <p>{quoteData.text}</p>

      <div className="d-flex flex-row justify-content-between align-items-center gap-2 fs-6">
        <p>Book: {quoteData.book}</p>
        <p>
          Chapter {quoteData.chapter}
          <span className="block">page:{quoteData.page_no}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterQuote;
