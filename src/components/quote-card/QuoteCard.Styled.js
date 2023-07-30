import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuoteCard = styled(motion.div)`
  width: 100%;
  max-width: 425px;
  max-height: 305px;
  margin: auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;

  .container-quote {
    max-width: 400px;
    align-self: center;
    overflow: hidden;
    margin: auto;
  }

  .container-game-quote {
    height: 275px;
    overflow: hidden;
  }

  .show-more {
    border: none;
    background-color: transparent;
    padding: 0.75rem 1.5rem;
  }

  .hidden {
    opacity: 0;
  }

  .hidden:hover {
    cursor: default;
  }

  .quote,
  .character {
    font-weight: 300;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    margin: 0;
  }

  .quote {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    color: #fff;
  }

  .character {
    margin-top: 1rem;
  }

  .full-quote {
    max-width: 425px;
    margin: 0 auto;
    height: 100%;
    font-size: 1.25rem;
    color: #fff;
    font-weight: 300;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    padding: 0 1rem;
  }

  .sml-quote {
    align-items: center;
  }

  .lrg-quote {
    align-items: flex-start;
  }

  .character {
    font-size: 1.5rem;
  }

  .quote-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .book-txt,
  .chapter-txt {
    font-size: 1rem;
  }

  @media screen and (min-width: 425px) {
    .quote,
    .full-quote {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 800px) {
    max-width: 500px;

    .quote,
    .full-quote {
      font-size: 1.65rem;
    }

    .book-txt,
    .chapter-txt {
      font-size: 1.25rem;
    }
  }
`;
