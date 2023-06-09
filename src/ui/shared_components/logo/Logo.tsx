import Container from "../atoms/container/Container";
import { LogoStyles } from "./LogoStyles";

const Logo = () => {
  return (
    <Container h="35px" align="start" justify="end">
      <LogoStyles />
    </Container>
  );
};

export default Logo;
