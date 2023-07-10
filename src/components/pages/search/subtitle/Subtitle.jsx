import React from "react";

const Subtitle = ({ quotesData }) => {
  return quotesData ? (
    <h2 className="fs-6 mt-2">{quotesData.description}</h2>
  ) : (
    <h2 className="fs-6 m-3 text-grey">
      If no quantity is selected all quotes for that character will be fetched.
    </h2>
  );
};

export default Subtitle;
