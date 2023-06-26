import React from "react";

const QuoteCard = (props) => {
  return (
    <div className="quote-card mt-4">
      <p className="quote">{props.quote}</p>
      <div className="mt-3">
        <p className="character">- {props.character} -</p>
      </div>
    </div>
  );
};

export default QuoteCard;
