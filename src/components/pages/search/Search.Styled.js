import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  position: relative;

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
    height: 60%;
  }

  .search-quote {
    border: solid 2px var(--grey-2);
    padding: 1.25rem;
  }

  .wobble-div {
    height: 100%;
  }

  @media screen and (min-width: 600px) {
    .container-quotes {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
    }
  }
`;
