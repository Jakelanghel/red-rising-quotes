import styled from "styled-components";

export const StyledCharacterQuote = styled.div`
  min-width: 350px;
  max-width: 400px;
  height: 100%;
  color: var(--white);
  font-size: 1.35rem;
  overflow-x: hidden;

  .character-quote {
    height: 100%;

    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 200px;
    gap: 2rem;
    border: solid 2px var(--grey-2);
  }
`;
