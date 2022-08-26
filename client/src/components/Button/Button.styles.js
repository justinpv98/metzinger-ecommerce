import styled from "styled-components";

export const Button = styled.button`
  background: none;
  padding: 0.75rem 1.5rem;
  font-size: var(--fs-300);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-weight: 600;

  &:disabled {
    opacity: 0.7;
    cursor: initial;
  }

  &:focus-within {
    outline: 4px solid var(--color-accent);
  }
  
`;

export const PrimaryButton = styled(Button)`
  background-color: var(--color-text);
  color: var(--color-background);
  border: 1px solid var(--color-text);

`;

export const PrimaryOutlineButton = styled(PrimaryButton)`
  color: var(--color-text);
  background-color: transparent;
`;

export const SecondaryButton = styled(Button)`
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-background);
`;

export const SecondaryOutlineButton = styled(SecondaryButton)`
  color: var(--color-background);
  background-color: transparent;
`;

export const TransparentButton = styled(Button)`
color: currentColor;
border: none;
background: none;
`