export const renderName = (parentComponent, character) => {
  if (parentComponent === "home") {
    return <span className="character text-red">- {character} -</span>;
  }
};
