import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
    min-height: 30rem;
    display: flex;
    justify-content: center;
    text-align: center;
  
    @media ${({ theme }) => theme.mediaQueries.large} {
      min-height: 40rem;
      margin-top: 3rem;
    }
`

export const Container = styled.div`
    margin-top: 7.5rem;

`

export const Title = styled.h2`
    font-size: var(--fs-800);
`

export const Subtitle = styled.h3`
    margin-top: 2.5rem;
    font-size: var(--fs-500);
`
  
export const Copy = styled.p`
    margin-top: 1.5rem;
    margin-bottom: 2rem;
    font-size: 1.25rem;
`

export const LinkButton = styled(Link)`
    display: inline-block;
    border: 1px solid var(--color-text);
    padding: 0.5rem 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 500;
    font-size: var(--fs-300);
  
    &:hover,
    &:focus {
      background-color: var(--color-text);
      color: var(--color-background);
    }

    &:focus-within {
      outline: 4px solid var(--color-accent);
    }
  
    @media ${({ theme }) => theme.mediaQueries.large} {
      margin-bottom: 0;
    }
`
  