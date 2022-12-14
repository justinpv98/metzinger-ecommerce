import styled, {keyframes} from 'styled-components';

const load = keyframes`
0%,
80%,
100% {
  box-shadow: 0 2.5em 0 -1.3em;
}
40% {
  box-shadow: 0 2.5em 0 0;
}
`

export const LoaderContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`

export const Loader = styled.div`
color: var(--color-text);
font-size: 10px;
margin: 80px auto;
position: relative;
text-indent: -9999em;
transform: translateY(-50%);
-webkit-animation-delay: -0.16s;
animation-delay: -0.16s;

&, &:before, &:after {
    border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: ${load} 1.8s infinite ease-in-out;
  animation: ${load} 1.8s infinite ease-in-out;
}

&:before, &:after {
    content: '';
    position: absolute;
    top: 0;
}

&:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
}

&:after {
    left: 3.5em; 
}

}

`
