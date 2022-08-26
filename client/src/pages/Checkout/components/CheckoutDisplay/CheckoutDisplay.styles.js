import styled from "styled-components";

export const CheckoutContainer = styled.div`
  @media ${({ theme }) => theme.mediaQueries.large} {
    order: 2;
    flex: 35%;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
`;

export const Prices = styled.div`
  border-bottom: 1px solid var(--color-neutral-400);
  padding-bottom: 0.5rem;
`;

export const CartItemsContainer = styled.div`

img {
  max-height: 300px;
  }
  
`

export const Total = styled(ListItem)`
  font-weight: 600;
  font-size: 20px;
`;
