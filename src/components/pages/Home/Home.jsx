import React, { useState } from "react";
import { useGetRandomQuote } from "../../../hooks/useGetRandomQuote";
import { StyledHome } from "./Home.Styled";
import QuoteCard from "./quote-card/QuoteCard";
import pyramidImg from "../../../assets/pyramid.png";
import Page from "../../shared/motion/Page";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [quoteKey, setQuoteKey] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { quote, getRandomQuote } = useGetRandomQuote();

  const handleClick = () => {
    setIsButtonDisabled(true);
    getRandomQuote();
    setQuoteKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);
  };

  return (
    <Page>
      <StyledHome>
        <QuoteCard
          key={quoteKey}
          character={quote.character}
          quote={quote.quote}
        />

        <Button
          onClick={handleClick}
          className="button"
          active
          disabled={isButtonDisabled}
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
