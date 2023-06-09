import React from "react";
import styled from "styled-components";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  bg?: string;
  color?: string;
  size?: string;
  weight?: number;
  children: React.ReactNode;
}

export const BaseButton = styled.button<ButtonProps>`
  // Default styles
  width: 91%;
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

  // Variant styles
  color: ${(props) => props.color || "white"};
  background-color: ${(props) => props.bg || "black"};
  font-size: ${(props) => props.size || "18px"};
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
};
