import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFullQuote = styled(motion.div)`
  min-width: 100%;
  overflow: visible;
  max-height: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #212529;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .quote {
    height: auto;
  }
`;
