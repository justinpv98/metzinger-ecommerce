import styled from "styled-components"

export const TabLabel = styled.li`
    padding: .5rem 1.5rem;
    cursor: pointer;
    letter-spacing: .5px;

    font-weight: ${({ selected }) => (selected ? "600" : "400")};

    &:active,
    &:hover,
    &:focus-within {
        box-shadow: inset 0 -2px 0 0 var(--color-text);
    }
`
