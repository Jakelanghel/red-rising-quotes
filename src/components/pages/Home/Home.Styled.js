import styled from "styled-components";

export const StyledHome = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }

  .home-btn {
    font-size: 1.15rem;
    margin: 1.5rem 0;
    padding: 0.5rem 1.5rem;
  }

  .container-img {
    width: 100%;
    margin-top: auto;
  }

  .pyramid {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 0;
    opacity: 0.8;
  }
`;
