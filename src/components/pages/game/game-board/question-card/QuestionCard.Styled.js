import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuestionCard = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .container-answers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .answer {
    width: 45%;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 1rem;
  }
`;
