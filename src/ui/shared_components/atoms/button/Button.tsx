import React from "react";

import { BaseButton, ButtonVariants } from "./ButtonStyles";
import { ButtonProps } from "./ButtonStyles";

const Button: React.FC<ButtonProps> = ({ children, variant, ...props }) => {
  const ButtonComponent = ButtonVariants[variant || "primary"] || BaseButton;
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

export default Button;
