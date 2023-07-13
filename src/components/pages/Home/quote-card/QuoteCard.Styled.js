import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuoteCard = styled(motion.div)`
  width: 100%;

  .start {
    display: flex;
  }

  .container-quote {
    max-height: 150px;
    overflow: hidden;
  }

  .read-more {
    border: none;
    background-color: transparent;
    padding: 0.75rem 1.5rem;
  }

  .quote,
  .character {
    font-weight: 300;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    margin: 0;
  }

  .quote {
    max-width: 350px;
    margin: 0 auto;
    font-size: 1.5rem;
    color: #fff;
  }

  .character {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 600px) {
    .quote {
      max-width: 500px;
    }
  }
  @media screen and (min-width: 1000px) {
    .quote {
      max-width: 700px;
    }
  }
`;