import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  max-height: 480px;
  max-width: var(--max-width);
  margin: auto;
  margin-bottom: 1.5rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    max-height: auto;
    height: 600px;
  }

  @keyframes scale-x-zero-to-max {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(1);
    }
  }


  .slick-list {
    overflow: hidden;
  }

  .slick-slide {
    height: 100vh;
    max-height: 480px;

    @media ${({ theme }) => theme.mediaQueries.large} {
      height: 600px;
    }

    &::before {
      background: var(--color-neutral-400);
      transform: none;
    }


  
    &.slick-active:after {
      animation: scale-x-zero-to-max 5s linear 1s 1 forwards; // Note that 6s should be same as Slick's autoplaySpeed and .8s same as speed
    }
  }

  button.slick-arrow {
    visibility: hidden;
  }
`;

export const ImageContainer = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }
`;

export const Image = styled.img`
  display: ${({ hidden }) => (hidden ? "none" : "block")};
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: 0 24.5%;

  @media ${({ theme }) => theme.mediaQueries.large} {
    height: 600px;
    margin-bottom: 0.5rem;
  }
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem 1rem 0 1rem;
  align-items: flex-end;
  color: var(--color-background);
  text-align: center;

  @media ${({ theme }) => theme.mediaQueries.large} {
    text-align: left;
    padding: 1rem 1rem 0 0;
    bottom: 1.5rem;
  }
`;

export const TextContainer = styled.div`
  width: 100%;

  p {
    display: block;
    margin-bottom: 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-left: 2.5rem;
  }
`;

export const CounterContainer = styled.div`
  margin-right: 2.5rem;
  margin-bottom: .5rem;
  display: none;
  user-select: none;
  letter-spacing: 2px;

  @media ${({ theme }) => theme.mediaQueries.large} {
    display: block;
  }
`;

export const CurrentPage = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Header = styled.h2`
  font-size: var(--fs-500);
  letter-spacing: 0.325px;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  
`;
