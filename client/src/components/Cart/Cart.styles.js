import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  padding: 1rem 2rem 3.75rem;
  color: var(--color-text);
  background-color: var(--color-background);
  visibility: ${({ cartOpen }) => (cartOpen === true ? "initial" : "hidden")};
  overflow-y: scroll;
  right: ${({ cartOpen }) => (cartOpen === true ? "0" : "-375px")};
  transition: ${({ cartOpen }) => (cartOpen === true ? "visibility 0s ease-out 0s, right 200ms ease-out" : "visibility 0s ease-in 300ms, right 200ms ease-in")};

  & > button {
    position: absolute;
    top: .25rem;
    right: 0rem;
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    right: ${({ cartOpen }) => (cartOpen === true ? "0" : "-420px")};
    width: 420px;
    border-left: 1px solid var(--color-neutral-400);
    padding: 1rem 1.5rem 3.75rem;
    
  }
`;

export const Title = styled.h2`
text-transform: uppercase;
`

export const TotalQuantity = styled.span`
font-weight: 600;
`

export const CartItemContainer = styled.div`
margin-top: 1rem;
`

export const Pricing = styled.div`
display: flex;
justify-content: space-between;
margin: 1rem 0 .75rem;
text-transform: uppercase;
font-weight: 600;
`

export const Reminder = styled.h3`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-size: var(--fs-500);
`

export const CheckoutContainer = styled.div`
position: fixed;
padding: .5rem 1rem;
background:  var(--color-background);
bottom: 0;
right: ${({ cartOpen }) => (cartOpen === true ? "0" : "-375px")};
transition: ${({ cartOpen }) => (cartOpen === true ? "right 200ms ease-out" : "right 200ms ease-in")};
width: 375px;
box-shadow: 0 -1px 4px 0 rgb(176 176 176 / 50%);

button {
  width: 100%;
}

@media ${({ theme }) => theme.mediaQueries.large} {
  width: 420px;
  right: ${({ cartOpen }) => (cartOpen === true ? "0" : "-420px")};
  
}
`

export const Overlay = styled.div`
  display: ${({ cartOpen }) => (cartOpen === true ? "block" : "none")};
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  cursor: pointer;

`;

export const LinkButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: var(--fs-300);
  width: 100%;
  text-align: center;
  background-color: var(--color-text);
  color: var(--color-background);


  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-bottom: 0;
  }
`