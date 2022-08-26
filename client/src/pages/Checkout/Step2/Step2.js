import React from "react";
import * as styled from "./Step2.styles";

import useFormValidation from "../../../hooks/useFormValidation/useFormValidation";

import StepTracker from "../components/StepTracker/StepTracker";
import CheckoutDisplay from "../components/CheckoutDisplay/CheckoutDisplay";

import { Input } from "../../../components/FormElements/FormElements";
import Button from "../../../components/Button/Button";

function Step2({setStep, setPaymentInfo}) {

  const { data, errors, handleSubmit, handleChange} =
    useFormValidation({
      initialState: {
        cardNumber: "",
        ccv: "",
        expirationDate: "",
      },
      onSubmit: () => {
        try {
          setPaymentInfo(data)
          setStep(3)
        } catch (error) {
          console.log(error.message);
        }
      },
      validations: {
        cardNumber: {
          required: {
            value: true,
            message: "Card Number is a required field.",
          },
          custom: {
            isValid: (value) => value.length === 15 || value.length === 16,
            message: "Card number length is invalid.",
          },
        },
        ccv: {
          required: {
            value: true,
            message: "CCV is a required field.",
          },
          custom: {
            isValid: (value) => value.length === 3,
            message: "CCV must be 3 characters long.",
          },
        },
        expirationDate: {
          pattern: {
            value: "^(0[1-9]|1[0-2])/?([0-9]{2})$",
            message: "Invalid characters...",
          },
          required: {
            value: true,
            message: "Expiration Date is a required field.",
          },
        },
      },
    });

  return (
    <styled.Main>
      <StepTracker currentStep={2} />
      <styled.MainContentContainer>
        <CheckoutDisplay />
        <styled.Form onSubmit={handleSubmit}>
          <styled.Fieldset>
            <styled.FieldsetTitle>Payment Information</styled.FieldsetTitle>
            <styled.FormItemGroup>
              <Input
                label="Card Number *"
                value={data.cardNumber || ""}
                onChange={handleChange("cardNumber")}
                error={errors.cardNumber}
                id="cardNumber"
                maxLength="16"
              />
              <Input
                label="CCV *"
                value={data.ccv || ""}
                onChange={handleChange("ccv")}
                error={errors.ccv}
                id="ccv"
                maxLength="3"
              />
            </styled.FormItemGroup>
            <Input
              label="Expiration Date (MM/YY) *"
              value={data.expirationDate || ""}
              onChange={handleChange("expirationDate")}
              error={errors.expirationDate}
              id="expirationDate"
              placeholder="MM/YY (ex. 09/27)"
              maxLength="5"
            />
            <p>*indicates required</p>
            <Button>
              Submit Info
            </Button>
          </styled.Fieldset>
        </styled.Form>
      </styled.MainContentContainer>
    </styled.Main>
  );
}

export default Step2;
