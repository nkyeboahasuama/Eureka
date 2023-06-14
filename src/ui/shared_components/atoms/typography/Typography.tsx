import React from "react";
import { Base } from "./TypographyStyles";
import { BaseProps } from "./TypographyStyles";
import { typographyVariants } from "./TypographyStyles";

interface TypoTypes extends BaseProps {
  children: React.ReactNode;
  variant?: keyof typeof typographyVariants;
}

const Typography: React.FC<TypoTypes> = ({ children, variant, ...props }) => {
  const StyledTypography = typographyVariants[variant || "normal"] || Base;
  return <StyledTypography {...props}>{children}</StyledTypography>;
};

export default Typography;
