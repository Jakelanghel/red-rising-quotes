import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  .container-title {
    max-width: 500px;
    margin: 0 auto;
  }

  .container-quotes {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }

  .container-title {
    border-bottom: solid 1px var(--grey-2);
  }

  .container-loader {
    display: flex;
    align-items: center;
    height: 50%;
  }

  @media screen and (min-width: 600px) {
    .container-quotes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      /* align-items: center; */
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`;
