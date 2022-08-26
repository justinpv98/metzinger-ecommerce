import styled from "styled-components";


export const InputItem = styled.li`
display: flex;
position: relative;
`

export const Label = styled.label`
  position: absolute;
  height: 1px;
  width: 1px;
  left: -10000px;
`;

export const Input = styled.input.attrs({ type: "radio" })`
position: absolute;
opacity: 0;
width: 100%;
height: 100%;
cursor: pointer;

&:checked + div,
&:focus + div,
&:disabled + div{
  color: var(--color-background);
  background-color: var(--color-text);
}

&:focus-within + div {
  outline: 4px solid var(--color-accent);
}

&:disabled + div {
  opacity: 0.7;
  cursor: initial;
}

`;

export const SizeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  padding: 0.5em 1.5em;
  border: 1px solid var(--color-neutral-400);
  cursor: pointer;
`;

export const Size = styled.p`
 
`;
