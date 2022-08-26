import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`
  margin-top: 3rem;
  padding: 1rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin: 3rem 0;
    padding: 2rem;
  }
`;

export const GreetingContainer = styled.div`
  margin: 0 auto 0.5rem auto;
  direction: rtl;

  button {
    margin-left: auto;
    border: none;
    background: none;
    text-decoration: underline;
    font-weight: 500;
    font-size: inherit;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: 370px;
  }
`;

export const ActiveTab = styled.div`
  min-height: 400px;
  margin-top: 1rem;
`;

export const Orders = styled.li`
  list-style: none;
  max-width: 800px;
  margin: 0 auto;
`;

export const WishlistTab = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const EmptyTab = styled.div`
  background: var(--color-neutral-200);
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 85rem;
  margin: auto;

  a {
    width: 100%;
    max-width: 400px;
  }
`;

export const AccountForm = styled.form`
  display: block;

  margin: 0 auto;

  & > * {
    margin: 1rem 1.5rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    width: 30%;
    max-width: 26rem;
  }
`;

export const SharedGroup = styled.div`
  display: flex;
  gap: 1rem;

  & > div {
    width: 100%;
  }
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  background-color: var(--color-text);
  color: var(--color-background);
  outline: 1px solid var(--color-text);
  padding: 0.5rem 2rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: var(--fs-300);
  letter-spacing: 0.5px;

  &:hover,
  &:focus {
    background-color: var(--color-background);
    color: var(--color-text);
  }

  &:focus-within {
    outline: 4px solid var(--color-accent);
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-bottom: 0;
  }
`;
