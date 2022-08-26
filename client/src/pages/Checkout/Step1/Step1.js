import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as styled from "./Step1.styles";

import useFormValidation from "../../../hooks/useFormValidation/useFormValidation";

import usStates from "../../../constants/usStates";

import StepTracker from "../components/StepTracker/StepTracker";
import CheckoutDisplay from "../components/CheckoutDisplay/CheckoutDisplay";

import { Input } from "../../../components/FormElements/FormElements";
import Button from "../../../components/Button/Button";

function Step1({ setStep, setAddressInfo }) {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const { firstName, lastName } = user;

  const { data, errors, handleSubmit, handleChange } = useFormValidation({
    initialState: {
      firstName,
      lastName,
      address: "",
      address2: "",
      city: "",
      state: "",
      zipCode: "",
    },
    onSubmit: () => {
      try {
        setAddressInfo(data);
        setStep(2);
      } catch (error) {
        console.log(error.message);
      }
    },
    validations: {
      firstName: {
        required: {
          value: true,
          message: "First Name is a required field.",
        },
      },
      lastName: {
        required: {
          value: true,
          message: "Last Name is a required field.",
        },
      },
      address: {
        required: {
          value: true,
          message: "Address is a required field.",
        },
      },
      address2: {
        required: {
          value: false,
        },
      },
      city: {
        required: {
          value: true,
          message: "City is a required field.",
        },
      },
      state: {
        required: {
          value: true,
          message: "State is a required field.",
        },
        custom: {
          isValid: (value) => {
            const validStates = usStates.filter(
              (state) => value.toLowerCase() === state.abbreviation.toLowerCase()
            );
            return validStates.length > 0;
          },
          message:
            "State must be valid and abbreviated (ex: California -> CA).",
        },
      },
      zipCode: {
        required: {
          value: true,
          message: "ZipCode is a required field.",
        },
        custom: {
          isValid: (value) => value.length === 5 && value.match(/[0-9]/g),
          message: "Zipcode must be valid and 5 characters long.",
        },
      },
    },
  });

  return (
    <styled.Main>
      <Button
        variant="transparent"
        icon="arrowLeft"
        onClick={() => navigate(-1)}
      />
      <StepTracker currentStep={1} />
      <styled.MainContentContainer>
        <CheckoutDisplay />
        <styled.Form onSubmit={handleSubmit}>
          <styled.Fieldset>
            <styled.FieldsetTitle>Shipping Address</styled.FieldsetTitle>
            <styled.FormItemGroup>
              <Input
                label="First Name *"
                value={data.firstName || user.firstName}
                onChange={handleChange("firstName")}
                error={errors.firstName}
                id="first-name"
                maxLength="24"
              />
              <Input
                label="Last Name *"
                value={data.lastName || user.lastName}
                onChange={handleChange("lastName")}
                error={errors.lastName}
                id="last-name"
                maxLength="24"
              />
            </styled.FormItemGroup>
            <div>
              <Input
                label="Address *"
                value={data.address || ""}
                onChange={handleChange("address")}
                error={errors.address}
                id="address"
                maxLength="40"
              />
              <Input
                label="Address 2"
                value={data.address2 || ""}
                onChange={handleChange("address2")}
                error={errors.address2}
                maxLength="40"
                id="address2"
              />
            </div>
            <styled.FormItemGroup>
              <Input
                label="City *"
                value={data.city || ""}
                onChange={handleChange("city")}
                error={errors.city}
                id="city"
                maxLength="15"
              />
              <Input
                label="State *"
                value={data.state || ""}
                onChange={handleChange("state")}
                error={errors.state}
                id="state"
                maxLength="2"
              />
              <Input
                label="Zipcode *"
                value={data.zipCode || ""}
                onChange={handleChange("zipCode")}
                error={errors.zipCode}
                id="zipCode"
                maxLength="5"
              />
            </styled.FormItemGroup>
            <p>*indicates required</p>
            <Button>Submit Info</Button>
          </styled.Fieldset>
        </styled.Form>
      </styled.MainContentContainer>
    </styled.Main>
  );
}

export default Step1;
