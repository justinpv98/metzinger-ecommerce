import React from "react";
import PropTypes from "prop-types";
import * as styled from "./StepTracker.styles"

function StepTracker({ currentStep }) {

    function isActiveStep(number){
        return (number <= currentStep)
    }
  return (
    <styled.StepsWrapper>
      <styled.Steps>
        <li>
          <div>
            <styled.StepNumber active={isActiveStep(1)}>1</styled.StepNumber>
          </div>
          <styled.StepTitle>Shipping</styled.StepTitle>
        </li>
        <li>
          <div>
            <styled.StepNumber active={isActiveStep(2)}>2</styled.StepNumber>
          </div>
          <styled.StepTitle>Payment</styled.StepTitle>
        </li>
        <li>
          <div>
            <styled.StepNumber active={isActiveStep(3)}>3</styled.StepNumber>
          </div>
          <styled.StepTitle>Review</styled.StepTitle>
        </li>
      </styled.Steps>
    </styled.StepsWrapper>
  );
}

StepTracker.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default StepTracker;
