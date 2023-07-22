export const renderShowMore = (hasOverFlow, showMore, expandQuote) => {
  if (hasOverFlow && !showMore) {
    return (
      <button onClick={expandQuote} className="show-more text-grey visible">
        Show More
      </button>
    );
  }
};
