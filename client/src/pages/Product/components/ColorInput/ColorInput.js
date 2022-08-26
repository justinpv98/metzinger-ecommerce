import React from "react";
import * as styled from "./ColorInput.styles";
import PropTypes from "prop-types";

import { mapColorToRGB } from "../../../../utils/stringUtils";

function ColorInput(props) {
  return (
    <styled.InputItem>
      <styled.Label htmlFor={props.id}>{props.label}</styled.Label>
      <styled.Input
        tabIndex={0}    
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        defaultChecked={props.defaultChecked}
        disabled={props.disabled}
      />
      <styled.ColorContainer>
        <styled.Color color={mapColorToRGB(props.color)} />
      </styled.ColorContainer>
    </styled.InputItem>
  );
}

ColorInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default ColorInput;
