import React from 'react'
import {  Link } from "react-router-dom";
import * as styled from './Step3.styles'

import Button from '../../../components/Button/Button';

import StepTracker from '../components/StepTracker/StepTracker'
import CheckoutDisplay from "../components/CheckoutDisplay/CheckoutDisplay";

function Step3({setStep, submitPayment}) {

  return (
    <styled.Main>
      <StepTracker currentStep={3} />
      <styled.MainContentContainer>
      <CheckoutDisplay />
      <styled.Form>
        <styled.Fieldset>
        <h2>This marks the end of the cart/shopping process.</h2>
        <Button onClick={() => submitPayment()}>Submit Information</Button>
        </styled.Fieldset>
      </styled.Form>
      </styled.MainContentContainer>
    </styled.Main>
  )
}

export default Step3