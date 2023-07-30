export const parseChapterInfo = (quote) => {
  const chapterArr = quote.chapter.split(" ");
  let chapterNumber = chapterArr[0].slice(0, -1);
  let chapterName = chapterArr.slice(1).join(" ");
  chapterName = chapterName.replace(/^[a-zA-Z]+:/, "").trim();

  const chapterData = {
    number: chapterNumber,
    name: chapterName,
  };

  return chapterData;
};
