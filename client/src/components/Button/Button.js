import React from "react";
import PropTypes from "prop-types";
import * as styled from "./Button.styles";

import Icon from "../Icon/Icon";

function Button({ variant, children, icon, iconSize, ...props }) {
  switch (variant) {
    case "primary":
      return (
        <styled.PrimaryButton {...props}>
          {icon && <Icon icon={icon} size={iconSize} />}
          {children}
        </styled.PrimaryButton>
      );
    case "primaryOutline":
      return (
        <styled.PrimaryOutlineButton {...props}>
          {icon && <Icon icon={icon} size={iconSize} />}
          {children}
        </styled.PrimaryOutlineButton>
      );
    case "secondary":
      return (
        <styled.SecondaryButton {...props}>
          {icon && <Icon icon={icon} size={iconSize} />}
          {children}
        </styled.SecondaryButton>
      );
    case "secondaryOutline":
      return (
        <styled.SecondaryOutlineButton {...props}>
          {icon && <Icon icon={icon} size={iconSize} />}
          {children}
        </styled.SecondaryOutlineButton>
      );
    case "transparent":
      return (
        <styled.TransparentButton {...props}>
          {icon && <Icon icon={icon} size={iconSize} />}
          {children}
        </styled.TransparentButton>
      );
    default:
      return null;
  }
}

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  iconSize: PropTypes.string,
  icon: PropTypes.node
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
