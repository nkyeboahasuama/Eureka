import React from "react";
import { Base } from "./TypographyStyles";
import { BaseProps } from "./TypographyStyles";
import { typographyVariants } from "./TypographyStyles";

interface TypoTypes extends BaseProps {
  variant?: keyof typeof typographyVariants;
}

const Typography: React.FC<TypoTypes> = ({ variant, ...props }) => {
  const StyledTypography = typographyVariants[variant || "normal"] || Base;
  return <StyledTypography {...props}></StyledTypography>;
};

export default Typography;
