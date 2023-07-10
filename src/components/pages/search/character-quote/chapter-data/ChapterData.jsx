import React from "react";

const ChapterData = ({ quoteData }) => {
  const chapterArr = quoteData.chapter.split(" ");
  let chapterNumber = chapterArr[0].slice(0, -1);
  let chapterName = chapterArr.slice(1).join(" ");
  chapterName = chapterName.replace(/^[a-zA-Z]+:/, "").trim();
  return (
    <div>
      <p>Chapter : {chapterNumber}</p>
      <p className="text-red"> {chapterName}</p>
    </div>
  );
};

export default ChapterData;
