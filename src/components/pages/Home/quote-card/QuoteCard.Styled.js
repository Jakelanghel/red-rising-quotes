import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuoteCard = styled(motion.div)`
  width: 100%;

  .container-quote {
    max-height: 150px;
    height: 150px;
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
    max-width: 350px;
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
    font-size: 1.5rem;
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

  @media screen and (min-width: 600px) {
    /* .quote {
      max-width: 450px;
    } */
  }
  /* @media screen and (min-width: 1000px) {
    .quote {
      max-width: 700px;
    }
  } */
`;
