import styled from "styled-components";

export const StyledNavigation = styled.nav`
  max-width: 850px;
  margin: 0 auto;

  @media screen and (min-width: 400px) {
    .nav-link {
      font-size: 1.15rem;
    }
  }

  @media screen and (min-width: 992px) {
    .nav-link {
      font-size: 1.15rem;
    }
  }

  @media screen and (min-width: 775px) {
    .nav-link {
      margin-left: 1.5rem;
    }

    .navbar-expand .navbar-nav .nav-link {
      padding: 1rem 1rem;
    }
  }
`;
