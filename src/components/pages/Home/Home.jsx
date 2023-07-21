import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { StyledHome } from "./Home.Styled";
import Page from "../../shared/motion/Page";
import QuoteCard from "./quote-card/QuoteCard";
import Button from "react-bootstrap/Button";
import pyramidImg from "../../../assets/pyramid.png";
import ErrorMsg from "../../shared/error/ErrorMsg";

const Home = () => {
  const [quoteKey, setQuoteKey] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { data, fetchData, apiError, apiErrorMsg } = useFetch();

  const handleClick = () => {
    setIsButtonDisabled(true);
    fetchData("http://localhost:5000/api/red-rising/random/");
    setQuoteKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  const error = apiError ? <ErrorMsg error={apiErrorMsg} /> : null;
  const buttonDisabled = isButtonDisabled ? true : apiError ? true : false;

  const quoteData = !data
    ? {
        quote: "I would have lived in peace. But my enemies brought me war.",
        character: "Darrow O'Lykos",
      }
    : data;

  return (
    <Page>
      <StyledHome>
        <QuoteCard
          key={quoteKey}
          character={quoteData.character}
          quote={quoteData.quote}
        />

        {error}

        <Button
          onClick={handleClick}
          className="button"
          active
          disabled={buttonDisabled}
        >
          Get Random Quote
        </Button>

        <div className="container-img">
          <img className="pyramid" src={pyramidImg} alt="" />
        </div>
      </StyledHome>
    </Page>
  );
};

export default Home;
