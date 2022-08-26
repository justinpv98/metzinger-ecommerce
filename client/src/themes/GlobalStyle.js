import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
    --color-accent: ${({ theme }) => theme.color.accent};
    --color-background: ${({ theme }) => theme.color.white};
    --color-neutral-200:${({ theme }) => theme.color.neutral200};
    --color-neutral-400: ${({ theme }) => theme.color.neutral400};
    --color-neutral-700: ${({ theme }) => theme.color.neutral700};
    --color-text: ${({ theme }) => theme.color.black};
    --fs-100: ${({ theme }) => theme.fontSize[100]};
    --fs-200: ${({ theme }) => theme.fontSize[200]};
    --fs-300: ${({ theme }) => theme.fontSize[300]};
    --fs-400: ${({ theme }) => theme.fontSize[400]};
    --fs-500: ${({ theme }) => theme.fontSize[500]};
    --fs-600: ${({ theme }) => theme.fontSize[600]};
    --fs-700: ${({ theme }) => theme.fontSize[700]};
    --fs-800: ${({ theme }) => theme.fontSize[800]};
    --max-width: 100rem;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-display: swap;
}

button {
    cursor: pointer;
}

input,
textarea,
button {
    font-family: inherit;
}

a {
    color: inherit;
    text-decoration: none;
    
}
`;
