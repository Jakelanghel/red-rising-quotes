import React, { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { StyledHome } from "./Home.Styled";
import Page from "../../pages/motion-page/Page";
import QuoteCard from "../../components/quote-card/QuoteCard";
import Button from "react-bootstrap/Button";
import pyramidImg from "../../assets/pyramid.png";
import ErrorMsg from "../../components/error/ErrorMsg";
import HomeContent from "./home-content/HomeContent";

const Home = () => {
  const [quoteKey, setQuoteKey] = useState(0);
  const { data, fetchData, isLoading, apiError, apiErrorMsg } = useFetch();

  const handleClick = () => {
    fetchData("https://dynamic-api-proxy.onrender.com/api/red-rising/random/");
    setQuoteKey((prevKey) => prevKey + 1);
  };

  const error = apiError ? <ErrorMsg error={apiErrorMsg} /> : null;
  const buttonDisabled = isLoading ? true : false;

  const quoteData = data || {
    book: "Red Rising",
    quote: "I would have lived in peace. But my enemies brought me war.",
    character: "Darrow O'Lykos",
    chapterNumber: 0,
    chapterName: "Prolog",
  };

  return (
    <Page customClass="home">
      <StyledHome>
        <div className="container">
          {error}
          <HomeContent
            isLoading={isLoading}
            quoteKey={quoteKey}
            character={quoteData.character}
            quote={quoteData.quote}
          />

          <Button
            onClick={handleClick}
            className="button home-btn"
            active
            disabled={buttonDisabled}
          >
            Get Random Quote
          </Button>
        </div>

        <div className="container-img">
          <img className="pyramid" src={pyramidImg} alt="" />
        </div>
      </StyledHome>
    </Page>
  );
};

export default Home;
