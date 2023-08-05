import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFullQuote = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212529;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: visible;

  .full-quote {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.35rem;
    font-weight: 300;
    text-align: center;
    font-family: "League Spartan", sans-serif;
    color: #fff;
    padding: 0 1rem;
  }

  .character {
    font-size: 1.75rem;
  }
`;
