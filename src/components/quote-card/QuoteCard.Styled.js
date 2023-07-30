import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuoteCard = styled(motion.div)`
  width: 100%;
  max-width: 425px;
  margin: auto 0;

  .home-quote {
    max-height: 215px;
  }

  .search-quote {
    min-height: 365px;
    max-height: 365px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    overflow: hidden;
    border-radius: 10px;
    border: solid 2px var(--grey-2);
  }

  .game-quote {
    max-height: 350px;
    min-height: 350px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-quote {
    max-width: 400px;
    align-self: center;
    overflow: hidden;
    margin: auto;
  }

  .quote,
  .character {
    font-weight: 300;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    margin: 0;
  }

  .quote {
    max-height: 150px;
    font-size: 1.5rem;
    color: #fff;
  }

  .character {
    margin: 1rem 0;
  }

  .container-search-quote {
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
