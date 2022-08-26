import styled from "styled-components";
import {Link} from "react-router-dom";

export const SectionContainer = styled.section`
  margin: 1.5rem 2rem;
  

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin: 1.5rem 2.5rem;
    justify-content: space-between;
  }
`;

export const SectionTitle = styled.h2`
  font-size: var(--fs-500);
  text-align: center;
  text-transform: uppercase;

  @media ${({ theme }) => theme.mediaQueries.large} {
    text-align: left;
  }
`;


export const Categories = styled(SectionContainer)`
  max-width: var(--max-width);
  margin: auto;
  margin-bottom: 1rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: flex;
    justify-content: space-between;
  }
`;

export const CategoryContainer = styled.article`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  transition: all ease-in-out 400ms;
  overflow: hidden;

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: calc(50% - 0.625rem);
  }

  &:hover {
    img {
      filter: blur(0px);

      @media (prefers-reduced-motion: no-preference) {
        transform: scale(1.1);
      }
    }
  }

  &::after {
    position: absolute;
    content: "";
    z-index: 1;
    inset: 0;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 12%;
    align-self: center;
    transition: transform ease-in-out 300ms, filter 300ms ease-in-out;
    filter: blur(1.5px);
    transform: scale(1.01);
  }

  &:nth-of-type(2) {
    img {
      object-position: 0 25%;
    }
  }
`;

export const CategoryContent = styled.div`
  position: relative;
  text-align: center;
  color: var(--color-background);
  z-index: 2;
`;

export const CategoryHeader = styled.h3`
  margin-bottom: 0.5rem;
  font-size: var(--fs-600);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const CategoryText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
`;

export const Banner = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin: auto;

  @media ${({ theme }) => theme.mediaQueries.large} {
    flex-direction: row;
  }
`;

export const BannerImage = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  background-position: 0 30%;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;

  &::before {
    display: block;
    padding-top: calc((670 * 100%) / 868);
    content: "";
  }
  @media ${({ theme }) => theme.mediaQueries.large} {
    &::before {
      display: none;
    }
  }
`;

export const BannerContentWrapper = styled.div`
  position: relative;
  background: var(--color-neutral-200);
  color: var(--color-text);
  width: 100%;

  &::before {
    display: none;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: 458px;

    &::before {
      display: block;
      position: relative;
      content: "";
      padding-top: calc((670 * 100%) / 600);
    }
  }
`;

export const BannerContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.large} {
    position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  }

  h2 {
    font-size: var(--fs-600);
    font-weight: 700;
    margin-top: 2rem;
  }

  p {
    font-size: var(--fs-500);
    font-weight: 400;
    margin-bottom: 2rem;
  }

  button {
    margin-bottom: 2rem;
  }
`;

export const LinkButton = styled(Link)`
padding: 0.75rem 1.5rem;
font-size: var(--fs-300);
letter-spacing: 1.5px;
text-transform: uppercase;
font-weight: 600;

&:disabled {
  opacity: 0.7;
}

&:focus-within {
  outline: 4px solid var(--color-accent);
}

border: 1px solid var(--color-background);
color: var(--color-background);
background-color: transparent;
`