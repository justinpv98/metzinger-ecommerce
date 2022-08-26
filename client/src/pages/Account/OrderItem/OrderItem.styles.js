import styled from "styled-components";
import { Link } from "react-router-dom";


export const Header = styled.div`
display: flex;
gap: 2rem;

background: var(--color-text);
color: var(--color-background);
`

export const HeaderGroup = styled.div`
display: flex;
flex-direction: column;

`

export const OrderNumber = styled.p`
margin-top: .75rem;
margin-left: 1rem;
font-weight: 600;
`

export const GroupTitle = styled.p`
padding-top: .75rem;
font-weight: 600;
font-size: var(--fs-200);
text-transform: uppercase;
letter-spacing: .06em;
`

export const GroupBody = styled.p`
margin: .5rem 0 .75rem 0;
font-size: var(--fs-300);
`

export const Body = styled.div`
border: 1px solid var(--color-neutral-400);
margin-bottom: 2rem;
padding:  .75rem 1rem;
`

export const Status = styled.p`
font-size: 1.25rem;
font-weight: 600;
`

export const ExpandedStatus = styled.div`
margin-top: .25rem;
margin-bottom: 1rem;
font-size: var(--fs-300);
`

export const ProductImage = styled.img`
width: 5rem;
margin-right: 2rem;
`

export const BodyContainer = styled.div`
display: flex;
margin-bottom: .75rem;
`


export const ProductName = styled(Link)`
font-weight: 600;
text-decoration: underline;
`

export const InfoContainer = styled.div`
display: flex;
flex-direction: column;
gap: .25rem;
`