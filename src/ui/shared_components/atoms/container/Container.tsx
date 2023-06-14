import {
  BaseContainer,
  PrimaryContainer,
  SecondaryContainer,
  BaseProps,
} from "./ContainerStyles";

interface ContainerProps extends BaseProps {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Container: React.FC<ContainerProps> = ({
  variant,
  children,
  ...props
}) => {
  let StyledContainer = BaseContainer;
  if (variant === "primary") {
    StyledContainer = PrimaryContainer;
  } else if (variant === "secondary") {
    StyledContainer = SecondaryContainer;
  }
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
