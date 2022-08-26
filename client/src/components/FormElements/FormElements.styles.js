import styled from "styled-components";

export const InputContainer = styled.div`
position: relative;
`

export const InputLabel = styled.label`
  display: block;
  letter-spacing: 0.5px;
  font-size: var(--fs-300);
  font-weight: 500;
`;

export const Error = styled.p`
height: .375rem;
color: var(--color-accent);

&:empty {
  visibility: hidden;
}
`

export const TextInput = styled.input.attrs(({ type }) => ({
  type
}))`
  outline: ${({ error }) => error ? "2px solid var(--color-accent)" : "1px solid var(--color-neutral-700)"};
  padding: 0.25em 0.5em;
  font-size: var(--fs-300);
  margin: 0.5rem 0;
  width: 100%;
  border: none;

  & + button {
    color: ${({ error }) => error ? "var(--color-accent)" : "var(--color-neutral-700)"}
  }
`;

export const ShowPasswordToggle = styled.button`
background: transparent;
border: none;
position: absolute;
top: 61.25%;
right: .5rem;
transform: translateY(-50%);

`

export const RadioInput = styled.input.attrs({type: "radio"})`

`

export const NumberInputContainer = styled.div`
position: relative;
width: 80px;

button {
  position: absolute;
  height: 100%;
  padding: 0 .5rem;
}

button:first-of-type {
  left: 0;
}

button:last-of-type {
  right: 0;
}

`

export const NumberInput = styled.input.attrs({type: "number"})`
width: 100%;
height: 100%;
pointer-events: none;
text-align: center; 
border: 1px solid black;
padding: .25rem 0;

&::-webkit-inner-spin-button,
&::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

`