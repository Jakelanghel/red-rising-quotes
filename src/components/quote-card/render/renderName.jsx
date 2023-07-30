export const renderName = (parentComponent, character) => {
  if (parentComponent !== "game") {
    return <p className="character text-red">- {character} -</p>;
  }
};
