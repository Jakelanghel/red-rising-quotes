import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFullQuote = styled(motion.div)`
  width: 100%;
  min-height: 100%;
  overflow: visible;
  min-height: none;
  max-height: none;
  position: absolute;
  top: 0;
  background-color: #212529;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
