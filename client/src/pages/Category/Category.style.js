import styled from "styled-components";

export const Main = styled.main`
  margin-top: 2rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-top: 3rem;
    padding-top: 0.25rem;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem 1rem;
  max-width: calc(var(--max-width));
  margin: auto;

  & > div {
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 1rem 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GridItem = styled.div`
  aspect-ratio: 77/100;
  background-color: #333;

  @media ${({ theme }) => theme.mediaQueries.large} {
    aspect-ratio: 77/100;
  }
`;

export const CategoryTitle = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: var(--fs-600);
  font-weight: 600;
  letter-spacing: 1.5px;
  margin: 4rem 0 1.25rem 0;

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin: 1.25rem 0;
  }

`;
