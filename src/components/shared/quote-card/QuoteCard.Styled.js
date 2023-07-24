import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuoteCard = styled(motion.div)`
  width: 100%;
  max-width: 425px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;

  .container-quote {
    height: 215px;
    overflow: hidden;
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

  .container-quote {
    max-width: 400px;
    margin: 0 auto;
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
    font-size: 1.25rem;
    color: #fff;
  }

  .game-quote {
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
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .book-txt,
  .chapter-txt {
    font-size: 0.85rem;
  }

  @media screen and (min-width: 800px) {
    .container-quote {
      max-width: 600px;
    }
    .quote {
      font-size: 1.5rem;
    }
  }
`;
