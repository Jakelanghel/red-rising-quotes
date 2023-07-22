import Title from "../title/Title";
import Subtitle from "../subtitle/Subtitle";
import { PuffLoader } from "react-spinners";

const SearchContent = (props) => {
  const { isLoading, data, quoteElements } = props;

  return isLoading ? (
    <div className="container-loader">
      <PuffLoader color="#991E1F" size={100} />
    </div>
  ) : (
    <div className="text-white text-center mt-5 p-1">
      <div className="container-title">
        <Title quotesData={data} />
        <Subtitle quotesData={data} />
      </div>

      <div className="container-quotes ">{quoteElements}</div>
    </div>
  );
};

export default SearchContent;
