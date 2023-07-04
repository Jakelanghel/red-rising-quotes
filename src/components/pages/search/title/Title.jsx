import React from "react";

const Title = (props) => {
  const { quotesData } = props;
  return quotesData ? (
    <h1 className="fs-1 mt-2">{quotesData.name}</h1>
  ) : (
    <h1 className="fs-4 mt-2">
      Select a characters name and the number of quotes you want to fetch.
    </h1>
  );
};

export default Title;