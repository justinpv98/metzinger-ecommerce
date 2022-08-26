import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  min-height: calc(100vh - 54px);
  grid-template-rows: .75fr 4fr;

  & > button {
    position: absolute;
    grid-template-rows: 1fr 3fr;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-top: 2.75rem;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 0;
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 100vw;
  padding: 0 1rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    justify-content: space-between;
    flex-direction: row;
    margin-top: 2rem;
    padding: 0 2rem;
    gap: 6rem;
  }
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
`;

export const Form = styled.form`
  @media ${({ theme }) => theme.mediaQueries.large} {
    order: 1;
    flex: 60%;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;

  div {
    margin-bottom: 0.75rem;
  }

  button {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;

    @media ${({ theme }) => theme.mediaQueries.large} {
      width: auto;
    }
  }
  
`;

export const FieldsetTitle = styled.legend`
  font-size: var(--fs-500);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

export const FormItemGroup = styled.div`
  display: flex;
  gap: 1rem;

  &:first-of-type {
    div {
      flex: 50%;
    }
  }

  &:last-of-type {
    margin-bottom: .5rem;

    div:first-of-type {
      flex-basis: 70%;
    }
  }
`;
