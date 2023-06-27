import React from "react";

const CharacterQuote = (props) => {
  const { book, chapter, page_no } = props;
  return (
    <div className="text-white text-center fs-5 mt-2">
      <p>{quote}</p>

      <div className="d-flex flex-row justify-content-between align-items-center gap-2">
        <p>{book}</p>
        <p>
          {chapter} / page:{page_no}
        </p>
      </div>
    </div>
  );
};

export default CharacterQuote;
