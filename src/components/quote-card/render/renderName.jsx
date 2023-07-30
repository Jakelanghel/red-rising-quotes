export const renderName = (parentComponent, character) => {
  if (parentComponent === "home") {
    return <p className="character text-red">- {character} -</p>;
  }
};
