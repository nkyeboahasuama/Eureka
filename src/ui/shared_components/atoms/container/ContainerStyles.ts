import styled from "styled-components";

export interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  bg?: string;
  w?: string;
  h?: string;
  fd?: string;
  p?: string;
  m?: string;
  border?: string;
  props?: string;
  color?: string;
  display?: string;
  align?: string;
  justify?: string;
  text?: string;
  lh?: string;
  weight?: string;
}

export const BaseContainer = styled.div<BaseProps>`
  font-family: "Montserrat", sans-serif;
  width: ${(props) => props.w || "100%"};
  max-width: 100%;
  height: ${(props) => props.h || "100vh"};
  margin: ${(props) => props.m};
  padding: ${(props) => props.p};
  border: ${(props) => props.border};
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.fd || "column"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  text-align: ${(props) => props.text || "center"};
  line-height: ${(props) => props.lh || "1.5"};
  font-weight: ${({ weight }) => weight || 300};
`;

export const PrimaryContainer = styled(BaseContainer)`
  background-color: white;
  color: black;
`;
export const SecondaryContainer = styled(BaseContainer)`
  background-color: black;
  color: white;
`;
export const BodyContainer = styled(BaseContainer)`
  height: auto;
`;
