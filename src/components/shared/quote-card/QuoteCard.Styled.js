import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuoteCard = styled(motion.div)`
  width: 100%;
  max-width: 425px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 0.5rem;

  .container-quote {
    height: 215px;
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
    /* border: solid 1px red; */
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
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
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
