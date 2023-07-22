export const renderChapterInfo = (parentComponent, book, chapterData) => {
  if (parentComponent === "search") {
    return (
      <div className="quote-info ">
        <div className="d-flex flex-column">
          <p>Book</p>
          <p className="text-red">{book}</p>
        </div>
        <div className="d-flex flex-column">
          <div>
            <p>Chapter : {chapterData.number}</p>
            <p className="text-red"> {chapterData.name}</p>
          </div>
        </div>
      </div>
    );
  }
};
