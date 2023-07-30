export const renderChapterInfo = (parentComponent, book, chapterData) => {
  if (parentComponent === "search") {
    return (
      <div className="quote-info ">
        <div className="book-txt d-flex flex-column">
          <p>Book</p>
          <p className="text-red">{book}</p>
        </div>
        <div className="d-flex flex-column">
          <div className="chapter-txt">
            <p>Chapter : {chapterData.number}</p>
            <p className="text-red"> {chapterData.name}</p>
          </div>
        </div>
      </div>
    );
  }
};
