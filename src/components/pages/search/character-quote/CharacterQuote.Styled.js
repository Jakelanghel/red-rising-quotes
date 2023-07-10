import styled from "styled-components";

export const StyledCharacterQuote = styled.div`
  color: var(--white);
  font-size: 1.35rem;
  overflow-x: hidden;

  .character-quote {
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    gap: 2rem;
    border: solid 2px var(--grey-2);
  }
`;
