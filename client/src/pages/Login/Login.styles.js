import styled from 'styled-components'
import { Link } from "react-router-dom";



export const Main = styled.main`
margin-top: 4rem;

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-top: 6rem;
  }
`

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto 3rem;
`

export const Heading = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const Copy = styled.p`
  font-size: var(--fs-300);
  margin: 0.5rem 0 1.5rem;
`

export const Form = styled.form`
  margin: 0 2rem;

  
  & > button {
    width: 100%;
  }
`

export const FormElement = styled.div`
  margin: 1rem 0;
  text-align: left;

  &:last-of-type {
    margin: 1rem 0 0 0;
  }

  input {
    width: 100%;
    &:focus {
      outline: 1px solid global.$color-primary;
    }
  }

  label {
    display: block;
  }
`

export const GuestLogin = styled.button`
  display: block;
  font-size: var(--fs-300);
  text-decoration: underline;
  text-align: left;
  border: 0;
  background: none;
  padding: 0;
  margin-bottom: 2rem;

  
`

export const HorizontalRule = styled.div`
  border-top: 1px solid var(--color-neutral-700);
  margin: 1.5rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;


  p {
    background-color: #fff;
    position: absolute;
    padding: 0.5rem;
  }
`

export const LinkButton = styled(Link)`
  display: inline-block;
  border: 1px solid var(--color-text);
  padding: 0.75rem 2rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: var(--fs-300);

  &:focus-within {
    outline: 4px solid var(--color-accent);
  }

  &:hover,
  &:focus {
    background-color: var(--color-text);
    color: var(--color-background);
  }

  @media ${({ theme }) => theme.mediaQueries.large} {
    margin-bottom: 0;
  }
`

export const SectionContainer = styled.div`
  margin: 0 2rem;

  a {
    width: 100%;
    text-align: center;
  }
`
