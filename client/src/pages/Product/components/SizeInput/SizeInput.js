import React, { Fragment } from "react";
import * as styled from "./SizeInput.styles";
import PropTypes from "prop-types";

function SizeInput({ availableSizes, options, setOptions, disabled, ...props }) {
  const sizeOptions = ["xs", "s", "m", "l", "xl"];

  return (
    <Fragment>
      {sizeOptions.map((option) => (
        <styled.InputItem key={option}>
          <styled.Label htmlFor={"size"}>{option}</styled.Label>
          <styled.Input
            tabIndex={0}
            id={option}
            name={"size"}
            value={option}
            onChange={() => setOptions({...options, size: option})}
            disabled={!availableSizes.includes(option) || disabled}
            defaultChecked={option === availableSizes[0] }
            {...props}
          />
          <styled.SizeContainer>
            <styled.Size>{option.toUpperCase()}</styled.Size>
          </styled.SizeContainer>
        </styled.InputItem>
      ))}
    </Fragment>
  );
}

SizeInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SizeInput;
