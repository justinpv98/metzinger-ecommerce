import styled from "styled-components";

export const StepsWrapper = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
  margin-top: 1rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    flex-direction: row;
    margin-top: 3rem;
  }
`;

export const Steps = styled.ul`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  position: relative;
  gap: 4.25rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    gap: 10rem;
  }
`;

export const StepNumber = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: var(--color-background);
  background-color: ${({ active }) =>
    active ? `var(--color-text)` : `var(--color-neutral-400)`};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: var(--fs-400);
  margin: 0 auto;
`;

export const StepTitle = styled.p`
  margin-top: 0.25rem;
`;
