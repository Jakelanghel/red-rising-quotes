import QuoteCard from "../../../components/quote-card/QuoteCard";
import { PuffLoader } from "react-spinners";

const SearchContent = (props) => {
  const { isLoading, quoteKey, character, quote } = props;

  return isLoading ? (
    <div className="container-loader">
      <PuffLoader color="#991E1F" size={100} />
    </div>
  ) : (
    <QuoteCard
      key={quoteKey}
      character={character}
      quote={quote}
      parentComponent="home"
    />
  );
};

export default SearchContent;
