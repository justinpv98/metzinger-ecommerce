import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin: auto;
  margin-top: 2.75rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: grid;
    grid-template-columns: 57.3% 43.7%;
    margin-top: 3.375rem;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  height: 100%;
  top: 2.75rem;
  overflow: hidden;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: block;
    height: 100%;
    min-height: calc(100vh - 3.375rem);
    margin-top: -5px;
    margin-bottom: -5px;
    position: initial;
  }
`;

export const ProductImage = styled.img`
  width: 100vw;
  scroll-snap-align: start;
  object-fit: cover;

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: 100%;
    height: 1200px;
    max-height: 150vh;
  }
`;

export const ContentWrapper = styled.div`
  padding: 1.5rem 1rem;
  position: relative;
  background-color: var(--color-background);

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 1.5rem 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding: 3.75rem 5rem 2.5rem 4.5rem;
  }
`;

export const StickyContainer = styled.main`
  @media ${({ theme }) => theme.mediaQueries.large} {
    position: sticky;
    top: 7.125rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 0 0.5rem 0 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  button:first-of-type {
    padding: 1em 1.5em;
    min-width: 100%;
  }
`;

export const Heading = styled.p`
  font-size: var(--fs-300);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0rem;
  letter-spacing: 0.75px;
`;

export const Title = styled.h1`
  font-size: var(--fs-500);
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const Subheader = styled.h2`
  font-size: var(--fs-300);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  letter-spacing: 0.75px;
`;

export const PriceContainer = styled.p`
  display: flex;
  align-items: center;
`;

export const FormerPrice = styled.p`
  color: var(--color-neutral-400);
  text-decoration: line-through;
`;

export const SizesContainer = styled.div`
  display: flex;
  font-weight: 500;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: 0.75rem;
`;

export const OptionsContainer = styled.ul`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const ShippingInfo = styled.p`
  font-size: var(--fs-300);
  margin: 1.5rem 0;
`;

export const HorizontalRule = styled.hr`
  margin: 1.5rem 0;
`;

export const ProductDetails = styled.aside`
  max-width: 60ch;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  line-height: 1.5;
`;
