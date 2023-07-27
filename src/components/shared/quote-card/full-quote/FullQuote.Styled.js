import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledFullQuote = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #212529;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
