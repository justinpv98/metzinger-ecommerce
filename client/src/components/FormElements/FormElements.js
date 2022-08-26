import React, { useState } from "react";
import PropTypes from "prop-types";
import * as styled from "./FormElements.styles";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";

export function Input({ id, label, error, ...props }) {
  const errorId = id + "-error";
  return (
    <styled.InputContainer>
      <styled.InputLabel htmlFor={id}>{label}</styled.InputLabel>
      <styled.TextInput
        aria-invalid={error}
        aria-errormessage={errorId}
        error={error}
        id={id}
        {...props}
      />
      <styled.Error id={errorId}>{error}</styled.Error>
    </styled.InputContainer>
  );
}

export function PasswordInput({ id, label, error, ...props }) {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const errorId = id + "-error";

  return (
    <styled.InputContainer>
      <styled.InputLabel htmlFor={id}>{label}</styled.InputLabel>
      <styled.TextInput
        type={passwordHidden ? "password" : "text"}
        aria-invalid={error}
        aria-errormessage={errorId}
        error={error}
        id={id}
        {...props}
      />
      <styled.ShowPasswordToggle
        type="button"
        aria-pressed={passwordHidden ? false : true}
        role="switch"
        onClick={(e) => {
          e.preventDefault();
          setPasswordHidden(!passwordHidden);
        }}
      >
        <Icon
          size="20px"
          icon={passwordHidden ? "passwordHidden" : "passwordVisible"}
        />
      </styled.ShowPasswordToggle>
      <styled.Error id={errorId}>{error}</styled.Error>
    </styled.InputContainer>
  );
}

export function RadioInput(props) {
  return (
    <styled.InputContainer>
      <styled.RadioInput {...props} />
      <styled.InputLabel htmlFor={props.id}>{props.label}</styled.InputLabel>
    </styled.InputContainer>
  );
}

export function NumberInput({ setQuantity, min, max, ...props }) {
  return (
    <styled.NumberInputContainer>
      <Button
        variant="transparent"
        aria-label="decrease"
        onClick={() => setQuantity(props.value <= min ? 1 : props.value - 1)}
      >
        -
      </Button>
      <styled.NumberInput type="number" tabIndex={-1} {...props} />
      <Button
        variant="transparent"
        aria-label="increase"
        onClick={() => setQuantity(props.value >= max ? 1 : props.value + 1)}
      >
        +
      </Button>
    </styled.NumberInputContainer>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
};

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

NumberInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
};

NumberInput.defaultProps = {
  min: 0,
  max: Infinity,
};
