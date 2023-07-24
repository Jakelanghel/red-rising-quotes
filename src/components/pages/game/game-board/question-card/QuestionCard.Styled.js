import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledQuestionCard = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2rem 0;

  .question {
    /* border-top: solid 1px grey;
    border-bottom: solid 1px grey; */
    /* font-size: 1.25rem; */
    display: none;
  }

  .container-answers {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: auto;
    /* margin-bottom: 1rem; */
  }

  .answer {
    width: 45%;
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 1rem;
  }
`;
