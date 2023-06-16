import styled from "styled-components";

export interface BaseProps extends React.HTMLAttributes<HTMLParagraphElement> {
  p?: string;
  m?: string;
  weight?: number;
  props?: string;
  textalign?: string;
}

export const Base = styled.p<BaseProps>`
  font-size: 14px;
  word-wrap: break-word;
  font-weight: 300;
  padding: ${({ p }) => p || "0px"};
  margin: ${({ m }) => m || "0px"};
  color: ${({ color }) => color};
  text-align: ${({ textalign }) => textalign};
  :link {
    text-decoration: none;
  }
`;

export const HeaderOne = styled(Base)`
  font-size: 30px;
  font-weight: ${({ weight }) => weight || 700};
`;
export const HeaderTwo = styled(Base)`
  font-size: 24px;
  font-weight: ${({ weight }) => weight || 600};
`;
export const HeaderThree = styled(Base)`
  font-size: 18px;
  font-weight: ${({ weight }) => weight || 500};
`;
export const Normal = styled(Base)`
  font-size: 14px;
  font-weight: ${({ weight }) => weight || 400};
`;
export const Medium = styled(Base)`
  font-size: 11px;
  font-weight: ${({ weight }) => weight || 200};
`;
export const Small = styled(Base)`
  font-size: 9px;
  font-weight: ${({ weight }) => weight || 200};
`;

export const typographyVariants = {
  h1: HeaderOne,
  h2: HeaderTwo,
  h3: HeaderThree,
  normal: Normal,
  medium: Medium,
  small: Small,
};
