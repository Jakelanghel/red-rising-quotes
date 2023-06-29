import React, { useState } from "react";
import { motion } from "framer-motion";
import { useGetRandomQuote } from "../../hooks/useGetRandomQuote";
import QuoteCard from "./quote-card/QuoteCard";
import Button from "react-bootstrap/Button";
import pyramidImg from "../../assets/pyramid.png";

const Home = () => {
  const { quote, getRandomQuote } = useGetRandomQuote();
  const [quoteKey, setQuoteKey] = useState(0);

  const handleClick = () => {
    getRandomQuote();
    setQuoteKey((prevKey) => prevKey + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}
      key={quoteKey}
      className="home d-flex flex-column justify-content-center align-items-center p-3"
    >
      <QuoteCard character={quote.character} quote={quote.quote} />

      <div className="d-flex flex-column gap-3">
        <Button onClick={handleClick}>Get Random Quote</Button>
      </div>

      <div className="container-img">
        <img className="pyramid" src={pyramidImg} alt="" />
      </div>
    </motion.div>
  );
};

export default Home;
