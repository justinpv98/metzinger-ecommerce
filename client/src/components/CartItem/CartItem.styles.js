import styled from "styled-components";

export const CartItem = styled.div`
display: flex;
width: 100%;
padding: .5rem 0;
border-bottom: 1px solid var(--color-neutral-200);

&:last-of-type {
    border-bottom: 0;
}
`

export const ImageContainer = styled.img`
min-width: 40%;
min-height: 100%;
background-color: var(--color-neutral-200);
object-fit: cover;

`

export const DetailsContainer = styled.div`
min-width: 60%;
padding-left: 1rem;
font-size: var(--fs-300);
`

export const DetailsHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-start;
`

export const Category = styled.h4`
text-transform: uppercase;
font-weight: 600;
`

export const ProductName = styled.h3`
font-size: 18px;
text-transform: uppercase;
margin-bottom: 1rem;


@media ${({ theme }) => theme.mediaQueries.large} {
  font-size: 1.25rem;
}
`

export const Button = styled.button`
display: inline;
text-decoration: underline;
padding: 0;
background: none;
border: none;
`

export const Detail = styled.p`
margin-top: .25rem;
`

export const PricingContainer = styled.div`
margin-top: 3rem;
display: flex;
justify-content: space-between
`

export const Price = styled.p`
font-weight: 600;
text-align: right;
align-self: flex-end;
`