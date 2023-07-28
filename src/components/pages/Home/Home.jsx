import React, { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { StyledHome } from "./Home.Styled";
import Page from "../../shared/motion/page/Page";
import QuoteCard from "../../shared/quote-card/QuoteCard";
import Button from "react-bootstrap/Button";
import pyramidImg from "../../../assets/pyramid.png";
import ErrorMsg from "../../shared/error/ErrorMsg";

const Home = () => {
  const [quoteKey, setQuoteKey] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { data, fetchData, apiError, apiErrorMsg } = useFetch();

  const handleClick = () => {
    setIsButtonDisabled(true);
    fetchData("https://dynamic-api-proxy.onrender.com/api/red-rising/random/");
    setQuoteKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  const error = apiError ? <ErrorMsg error={apiErrorMsg} /> : null;
  const buttonDisabled = isButtonDisabled || apiError;

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
          <QuoteCard
            key={quoteKey}
            book={quoteData.book}
            character={quoteData.character}
            quote={quoteData.quote}
            chapterNumber={quoteData.chapterNumber}
            chapterName={quoteData.chapterName}
            parentComponent="home"
          />

          {error}

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
