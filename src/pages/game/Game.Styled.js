import styled from "styled-components";

export const StyledGame = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    border-bottom: solid 1px var(--white);
    padding-bottom: 1rem;
  }

  .loader {
    margin-top: 10rem;
  }
`;
