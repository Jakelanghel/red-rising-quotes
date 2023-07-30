import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledGameOver = styled(motion.div)`
  color: var(--white);
  margin-top: 10rem;

  .total,
  .score {
    font-size: 1.75rem;
    padding: 0 5px;
    font-weight: 700;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .score {
    color: var(--red);
  }
`;
