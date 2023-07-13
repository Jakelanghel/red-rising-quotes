import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuestionCard = styled(motion.div)`
  min-height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;

  .question {
    border-top: solid 1px grey;
    border-bottom: solid 1px grey;
  }

  .answer {
    width: 45%;
  }
`;