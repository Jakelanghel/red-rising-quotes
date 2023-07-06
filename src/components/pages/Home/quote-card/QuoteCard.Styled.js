import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuoteCard = styled(motion.div)`
  margin-top: 3rem;
  .centered,
  .start {
    display: flex;
  }

  .centered {
    /* align-items: center; */
  }

  .start {
    align-items: flex-start;
  }

  .hide {
    /* min-height: 215px; */
    max-height: 150px;
    overflow: hidden;
  }

  .show {
    overflow: visible;
    min-height: none;
    max-height: none;
  }

  .centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .read-more {
    border: none;
    background-color: transparent;
  }

  .quote,
  .character {
    font-weight: 300;
    text-align: center;
    color: #fff;
    font-family: "League Spartan", sans-serif;
    margin: 0;
  }

  .quote {
    font-size: 1.5rem;
  }

  .character {
    font-size: 1.5rem;
  }
`;
