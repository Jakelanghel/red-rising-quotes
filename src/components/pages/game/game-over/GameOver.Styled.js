import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledGameOver = styled(motion.div)`
  color: var(--white);

  .score {
    font-size: 1.75rem;
    padding: 0 5px;
    color: var(--red);

    font-weight: 700;
  }
`;
