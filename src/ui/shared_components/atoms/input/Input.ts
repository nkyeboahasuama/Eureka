import styled from "styled-components";

interface InputProps {
  border?: string;
  w?: string;
  h?: string;
  color?: string;
  bg?: string;
  m?: string;
}
export const BaseInput = styled.input<InputProps>`
  margin: ${({ m }) => m};
  border: ${({ border }) => border};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  color: ${({ color }) => color || "black"};
  background: ${({ bg }) => bg || "white"};
  font-family: "Montserrat", sans-serif;
  text-align: center;
`;
