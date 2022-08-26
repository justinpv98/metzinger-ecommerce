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
&:focus + div{
    border: 1px solid black;
}

&:focus-within + div {
  outline: 2px solid black;
}

`;

export const ColorContainer = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Color = styled.div`
  flex: 1;
  background: ${({ color }) => (color)};
  border: ${({ color }) => color === "#F9F6F0" && "1px solid #999"};
  border-radius: 50%;
  margin: 3px;
  cursor: pointer;
`;
