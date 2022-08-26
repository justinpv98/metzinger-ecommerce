import styled from "styled-components";

export const Footer = styled.footer`
  border-top: 1px solid #ccc;
  padding-top: 1.5rem;
  font-size: var(--fs-300);
`;

export const SectionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.25rem, 20rem));
  gap: 1.5rem;
  max-width: calc(var(--max-width) + 5rem);
  margin: auto;
  padding: 0 1rem 1.5rem 1rem;

  @media ${({ theme }) => theme.mediaQueries.medium} {
    padding: 0 2rem 1.5rem 2rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between ;
    gap: 1rem;
  }
`;

export const Section = styled.div`
  input {
    width: 100%;
    height: 100%;
    margin: 0;

    &:focus {
      outline: none;
    }
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding: 0 1rem;
  }
`;

export const SectionTitle = styled.h4`
  text-transform: uppercase;
  margin-bottom: 0.475rem;
`;

export const SectionCopy = styled.p`
  font-size: var(--fs-200);
  max-width: 40ch;
  &:first-of-type {
    margin-bottom: 1rem;
  }
`;

export const FormItem = styled.form`
  display: inline-flex;

  label {
    position: absolute;
    left: -9999px;
  }

  &:focus-within {
    outline: 1.5px solid var(--color-text);
  }
`;

export const InputButton = styled.button`
  padding: 0.325rem 0.5rem;
  outline: 1px solid var(--color-text);
  border: 0;
  border-radius: 0;
  background: none;
  transition: 0.2s;
  cursor: pointer;
  height: 100%;

  &:hover,
  &:focus {
    background-color: var(--color-text);
    color: var(--color-background);
    outline: 1px solid var(--color-text);
  }
`;

export const List = styled.ul`
list-style-type: none;
`

export const ListItem = styled.li`
  margin-top: 0.625rem;
`;

export const SocialsSection = styled.div`
  margin-top: 1rem;
`;

export const SocialsItem = styled.div`
  display: inline-block;
`;

export const Social = styled.a`
  background-color: var(--color-text);
  color: var(--color-background);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.375rem;
  margin-right: 0.5rem;

  &:focus {
    outline: 2px solid #1869ff;
  }
`;

export const Attribution = styled.address`
  border-top: 1px solid #ccc;
  padding-top: 0.5rem;
  margin-top: 1rem;
  padding-left: 1rem;
  max-width: 93rem;
  margin: auto;
  

  @media ${({ theme }) => theme.mediaQueries.large} {
    padding-left: 2.5rem;
  }

`;

export const AttributionLink = styled.a`
  text-decoration: underline;
`;
