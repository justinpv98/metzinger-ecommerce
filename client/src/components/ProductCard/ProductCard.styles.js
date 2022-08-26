import styled from "styled-components";

export const Container = styled.article`
  text-align: center;
  font-size: var(--fs-300);
  display: flex;
  flex-direction: column ;
  align-items: center ;
  position: relative;

  & > button:first-of-type {
    position: absolute;
    top: .5rem;
    right: .5rem;
    background-color: var(--color-background);
    border-radius: 50%;
    padding: .375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    opacity: 0;

  }

  &:hover > button:first-of-type,
  &:focus-within > button:first-of-type{
    opacity: 1;
  }

  &:hover  img:first-of-type {
    opacity: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 77/100;
  cursor: pointer;
  object-fit:  cover;
  background-color: #333;

  @media ${({ theme }) => theme.mediaQueries.large} {
    aspect-ratio: 77/100;
  }
`;

export const OverlayImage = styled(Image)`
position: absolute;
inset: 0;
transition: opacity .3s cubic-bezier(.4,0,.6,1);
background-color: #333;
`

export const Body = styled.div`
  padding: 1rem;
`;

export const Name = styled.h4`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Price = styled.p`
  margin-bottom: 0.5rem;
`;
