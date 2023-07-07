import React from "react";
import styled from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "reject"
    | "accept"
    | "disabled"
    | "warning";
  bg?: string;
  color?: string;
  size?: string;
  weight?: number;
  w?: string;
  radius?: number;
  children: React.ReactNode;
}

export const BaseButton = styled.button<ButtonProps>`
  // Default styles
  height: 40px;
  border: none;
  font-family: "Montserrat", sans-serif;
  margin: 10px;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  flex-shrink: 0;

  // Variant styles
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bg || "black"};
  font-size: ${(props) => props.size || "14px"};
  border-radius: ${(props) => props.radius};
  width: ${(props) => props.w || "100%"};

  :link {
    text-decoration: none;
  }
`;

// Variants
export const ButtonVariants = {
  primary: styled(BaseButton)`
    background-color: white;
    color: black;
  `,
  secondary: styled(BaseButton)`
    background-color: black;
    color: white;
  `,
  accept: styled(BaseButton)`
    background-color: #03c988;
    color: white;
  `,
  reject: styled(BaseButton)`
    background-color: #cd1818;
    color: white;
  `,
  disabled: styled(BaseButton)`
    background-color: #eaf7ec;
    color: gray;
    cursor: not-allowed;
  `,
  warning: styled(BaseButton)`
    background-color: transparent;
    color: #ffcc00;
    cursor: default;
  `,
};
